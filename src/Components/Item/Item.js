

  import React from 'react';
  import './Item.css'
  
  const Item = (props) => {
    const {img, name,time} =props;
    
    console.log(props)
  
    return (
        <div className='details2' >
            <img  src={img} alt="" />
            <h3>{name}</h3>
            <p>Time required : <strong>{time}</strong>s</p>

            <button onClick={()=> {props.add(props.time)}} className='btn'>Add To List</button>
        </div>
        
    );
  };
  
  export default Item;