

  import React from 'react';
  import './Item.css'
  
  const Item = (props) => {
    
    return (
        <div className='details2' >
            <img  src={props.img} alt="" />
            <h3>Name:{props.name}</h3>
        </div>
    );
  };
  
  export default Item;