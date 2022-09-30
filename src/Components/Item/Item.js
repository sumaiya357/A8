

  import React from 'react';
  import './Item.css'
  
  const Item = (props) => {
    
    return (
        <div className='details2' >
            <img  src={props.img} alt="" />
            <h3>{props.name}</h3>
            <p>Time required :<strong>{props.time}</strong></p>
            <button className='btn'>Add To List</button>
        </div>
        
    );
  };
  
  export default Item;