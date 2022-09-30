

 import React, { useState } from 'react';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faArrows} from '@fortawesome/free-solid-svg-icons'
 import img from '../../images/img.jpg'
 import './Cart.css'


 const Cart = (props) => {


   const {cart} =props;
   // console.log(cart)
 
//    const [cart2, setCart2] = useState([])
   
//   const addBreakTime=(s1)=>{
//       const newCart2=[...cart2];
//       setCart2(newCart2)
//    }
//     let seconds2=0;
//     for(const sec2 of cart2){
//       // console.log(sec)
//         seconds2= seconds2 ;
      
//    }

   const [count, setcount] = useState([])
   
   const changeBreak=()=>{
      setcount(count)
   }
    
   let seconds=0;
   for(const sec of cart){
      // console.log(sec)
        seconds= seconds +sec ;
      
   }


    return (
        <div className='myCart'>

            {/*-----------About Me----------- */}
           <div className='cart'>
              <img className='img' src={img} alt="" />
                  <div className='info'>
                     <h3>Alexendar Herry</h3>
                     <span><FontAwesomeIcon className='icon' icon={faArrows}></FontAwesomeIcon></span>
                     <span>KumarPara,Sylhet</span>
                  </div>
           </div>
           
             
              {/* ----------about me details------- */}
               <div className='info2'>
                  <div className='weight'>
                     <span>65</span>kg
                     <h6>Weight</h6>
                     </div>
                  <div className='height'>
                    <span>5.5</span>
                     <h6>Height</h6>
                     </div>
                  <div className='age'>
                  <span>22</span>yrs
                     <h6>age</h6>
                     </div>
               
               </div>

               
               {/* ----------BREAK DETAILS-------*/}
               <div>
                  <h3 className='break'>Break Time</h3>
                  
                <div className='info3'>
                     <div>
                        <button onClick={changeBreak} >10</button>
                        </div>
                     <div >
                     <button><span className='s2'>20</span>s</button>
                        
                        </div>
                     <div >
                     <button><span className='s3'>30</span> s</button>
                        </div>
                     <div className='s4'>
                     <button><span>40</span>s</button>
                        </div>
                  </div>
            </div>

            {/* ------------Exercise Details----------*/}
            <div className='exercise-details' >

                 <h2>Exercise Details</h2>

                <div className='info4'>
                     <h3 className='exercise'>Exercise Time <span>{seconds}</span> seconds</h3>
                     <h3 className='break-time'>Break Time  <span>{count}</span> seconds</h3>
                </div>
            </div>

            {/*-------- Activity complete----- */}
            <div >
               <button className='btn2'>Activity Completed</button>
            </div>
         </div>
       
    );
 };
 
 export default Cart;