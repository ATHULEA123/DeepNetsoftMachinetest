// import React from 'react'
// import './hero.css'
// import logo from '../../assets/Logo.png';


// const Hero = () => {
//   return (
//     <>
//      <div className=' container hero'>
        
//         <div className='logo'>
//             <img src={logo} alt="" />
//             <div className='header'>
//             <h1>DEEP <span>NET</span> </h1>
//             <h1 className='soft'>SOFT</h1>
//             </div>
//         </div>
//         <div className='menu'>
           
//             <h1>MENU</h1>
//             <p>Please take a look at our menu featuring food, drinks, and brunch. 
//                 If you'd like to place an order, use the "Order Online" button located below the menu.</p>
           
//         </div>
        
//     </div>
//     <div className='banner'>
//            <div className='menu_button'>
//            <button>FOOD</button>
//            <button>DRINKS</button>
//            <button>BRUNCH</button>
//            </div>

//     </div>
//     </>
   
//   )
// }

// export default Hero


import React from 'react';
import './hero.css';
import logo from '../../assets/Logo.png';

const Hero = ({ setSelectedCategory }) => {
  return (
    <>
      <div className='container hero'>
        <div className='logo'>
          <img src={logo} alt="" />
          <div className='header'>
            <h1>DEEP <span>NET</span> </h1>
            <h1 className='soft'>SOFT</h1>
          </div>
        </div>
        <div className='menu'>
          <h1>MENU</h1>
          <p>
            Please take a look at our menu featuring food, drinks, and brunch. 
            If you'd like to place an order, use the "Order Online" button located below the menu.
          </p>
        </div>
      </div>
      <div className='banner'>
        <div className='menu_button'>
          <button onClick={() => setSelectedCategory('food')}>FOOD</button>
          <button onClick={() => setSelectedCategory('drinks')}>DRINKS</button>
          <button onClick={() => setSelectedCategory('brunch')}>BRUNCH</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
