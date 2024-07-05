import React from 'react';
import "./AddProducts.css";
import Image from './Image';
import Info from './Info';



function AddProducts() {
  return (
    <>
    <div className='main-addproducts-container'>
        <div className='image-div-container'><Image/></div>
        <div className='info-div-container'><Info/></div>
      
    </div>
    </>
  )
}

export default AddProducts
