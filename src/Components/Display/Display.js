
 import React, { useEffect, useState } from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons'
 import Item from '../Item/Item';
import './Display.css';

 
 const Display = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('fakeDB.json')
        .then(res=>res.json())
        .then(data=> setItems(data))
    }, [])
   
    return (

        <div className='display-container'>
          <div>
            
          <h1 className='title-name'> <FontAwesomeIcon className='icon' icon={faHeartCircleCheck}></FontAwesomeIcon>FITNESS CLUB</h1>
          
          <div>
          {
            items.map(item => <Item name={item.name} img={item.picture}></Item>)
           }
          </div>
          </div>

          <div className='details'>
            <h3>sumaiya</h3>
          </div>
        </div>
    );
 };
 
 export default Display;