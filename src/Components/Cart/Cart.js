

 import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faArrows} from '@fortawesome/free-solid-svg-icons'
 import img from '../../images/img.jpg'
 import './Cart.css'
 const Cart = () => {
    return (
        <div className='myCart'>
           <div className='cart'>
              <img className='img' src={img} alt="" />
                  <div className='info'>
                     <h3>Alexendar Herry</h3>
                     <span><FontAwesomeIcon className='icon' icon={faArrows}></FontAwesomeIcon></span>
                     <span>KumarPara,Sylhet</span>
                  </div>
           </div>
           
             

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
               <div>
                  <h3 className=''>Break Time</h3>
                  
               <div className='info3'>
                  <div className='s1'>
                     <button>10s</button>
                     </div>
                  <div className='s2'>
                  <button>20s</button>
                     
                     </div>
                  <div className='s3'>
                  <button>30s</button>
                     </div>
                  <div className='s4'>
                  <button>40s</button>
                     </div>
               
               </div>
               </div>
         </div>
       
    );
 };
 
 export default Cart;