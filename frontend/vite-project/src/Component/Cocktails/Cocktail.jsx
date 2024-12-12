// import React from 'react'
// import './Cocktail.css'
// import cocktail from '../../assets/cocktail1.png'
// import cocktailtwo from '../../assets/cocktail2.png'
// import frame from '../../assets/Frameone.png'
// import frameone from '../../assets/Frame.png'
// const Cocktail = () => {
//     return (
//         <>
//             <div className='container brunch_section'>
//                 <div className='cocktail_img'>
//                     <img src={cocktailtwo} alt="" />
//                 </div>
//                 <div className='content'>
//                     <div className='title-container'>
//                         <div className='line'></div>
//                         <h1>BRUNCH COCKTAILS</h1>
//                         <div className='line'></div>
//                     </div>
//                     <div className='dishes'>
//                     <div className='left_frame'>
//                     <img src={frame} alt="" />
//                 </div>
//                         <div className='dish_details'>
//                             <h3>CINNAMON TOAST CRUNCH.......................................<span>$16</span></h3>
//                             <p>Skrewball peanut butter whiskey, vanilla extract,
//                                 Amaretto, Baileys, egg white, cinnamon</p>
//                         </div>

//                         <div className='dish_details'>
//                             <h3>MOET SPRITZ.......................................................... <span>$20</span></h3>
//                             <p>Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper</p>
//                         </div>
//                         <div className='dish_details'>
//                             <h3>BAR 42 MARRY................................................................ <span>$14</span></h3>
//                             <p>SkrewTitos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded</p>
//                         </div>
//                         <div className='right_frame'>
//                     <img src={frameone} alt="" />
//                 </div>
//                     </div>
//                 </div>

//                 <div className='cocktails'>
//                     <img src={cocktail} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Cocktail

import React, { useEffect, useState } from 'react';
import './Cocktail.css';
import cocktail from '../../assets/cocktail1.png';
import cocktailtwo from '../../assets/cocktail2.png';
import frame from '../../assets/Frameone.png';
import frameone from '../../assets/Frame.png';

const Cocktail = ({ selectedCategory }) => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Fetch all data from the server
    fetch(`http://localhost:5000/products`)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    
    const filtered = data.filter((item) => item.type === selectedCategory);
    setFilteredData(filtered);
    console.log('Selected Category:',filtered);
    console.log('Available Data Types:', data.map(item => item.type));
  }, [data, selectedCategory]);

  return (
    <div className='container brunch_section'>
      <div className='cocktail_img'>
        <img src={cocktailtwo} alt="" />
      </div>
      <div className='content'>
        <div className='title-container'>
          <div className='line'></div>
          <h1>{selectedCategory.toUpperCase()} MENU</h1>
          <div className='line'></div>
        </div>
        <div className='dishes'>
          <div className='left_frame'>
            <img src={frame} alt="" />
          </div>
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div key={item._id} className='dish_details'>
                <h3>
                  {item.productName}.......................................<span>${item.price}</span>
                </h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No items available in this category.</p>
          )}
          <div className='right_frame'>
            <img src={frameone} alt="" />
          </div>
        </div>
      </div>
      <div className='cocktails'>
        <img src={cocktail} alt="" />
      </div>
    </div>
  );
};

export default Cocktail;
