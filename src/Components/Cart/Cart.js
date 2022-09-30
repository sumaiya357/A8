

 import React from 'react';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {  faArrows} from '@fortawesome/free-solid-svg-icons'
 import img from '../../images/img.jpg'
 import './Cart.css'
 const Cart = () => {
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

            {/* ------------Exercise Details----------*/}
            <div >

               <h2>Exercise Details</h2>

                <div className='info4'>
                  <h3 className='exercise'>Exercise Time <h4> <span>0</span> seconds</h4></h3>
                  <h3 className='break-time'>Break Time <h4> <span>0</span> seconds</h4></h3>

                </div>
            </div>

            {/* activity cpmlete */}
         </div>
       
    );
 };
 
 export default Cart;