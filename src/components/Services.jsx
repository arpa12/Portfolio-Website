import React from 'react';
import Box from './Box';
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';

function Services() {
  return (
    <div id='services'>
         <div className='s-heading'>
             <h1>Services</h1>
             <p>Here are some Services which I can provide you</p>
         </div>
         <div className='b-container'>
            <Box image={image1} alte='image1' button='Graphic Design' />
            <Box image={image2} alte='image2' button='Website Development' />
         </div>
      
    </div>
  )
}

export default Services;
