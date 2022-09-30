
 import React, { useEffect, useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
 import Item from '../Item/Item';
import './Display.css';
import Cart from '../Cart/Cart';

 
 const Display = () => {

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    
    
 
    

    useEffect(()=>{
        fetch('fakeDB.json')
        .then(res=>res.json())
        .then(data=> setItems(data))
    }, [])

    const addExerciseTime=(time)=>{
      const newCart=[...cart,time];
      setCart(newCart)
    }

   
   
    return (

        <div className='display-container'>
          <div >
            
          <h1 className='title-name'>
             <FontAwesomeIcon className='icon' icon={faHeartCircleCheck}>
              </FontAwesomeIcon>FITNESS CLUB</h1>

          <h3 className='title2'>Choose Your Today's Workout Activity</h3>

          <div className='details-container'>
          {
            items.map(item => <Item key={item._id} name={item.name} img={item.picture} time={item.time} addExerciseTime={addExerciseTime}
              ></Item>)
           }
          
          </div>

          <div className='ques'>
            <h1>Some Important Questions</h1>
            <div className=''>
              <h3>Q:1- How React Works?</h3>
              <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>


              <h3>Q:1- Differenece between Props and State.</h3>
              <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components..</p>


              <h3>Q:1- Beside loading data from API what are the uses of useEffect in react?</h3>
              <p>i. Validation input </p>
              <p>ii. Live Filtering</p>
              <p>iii. useEffect function is defined inside the component so that the variables and the functions defined inside the components can be accessed directly</p>
            </div>
          </div>
            
          </div>

          <div className='cart'>
           <Cart cart={cart}></Cart>
          </div> 
        </div>
    );
 };
 
 export default Display;