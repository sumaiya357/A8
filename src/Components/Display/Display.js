
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
          
          </div>

          <div className='cart'>
           <Cart cart={cart}></Cart>
          </div> 
        </div>
    );
 };
 
 export default Display;