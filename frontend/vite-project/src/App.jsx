
// import './App.css'
// import Footer from './Component/Footer/Footer'
// import Contact from './Component/Contact/Contact'
// import Productform from './Component/Productform/productform'

// import HeroSection from './Component/HeroSection/Hero'
// import Cocktails from './Component/Cocktails/Cocktail'
// function App() {


//   return (
//     <>
// 
//    <HeroSection  />
//    <Cocktails/>
//     {/* <Productform/> */}
//     <Contact/>
//      <Footer/>

//     </>
//   )
// }

// export default App

import React, { useState } from 'react';
import './App.css';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import Hero from './Component/HeroSection/Hero';
import Navbar from './Component/Navbar/Navbar'
import Cocktail from './Component/Cocktails/Cocktail';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('FOOD'); // Default category

  return (
    <>
        <Navbar/> 
      <Hero setSelectedCategory={setSelectedCategory} />
      <Cocktail selectedCategory={selectedCategory} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;



