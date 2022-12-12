import React from 'react';
import Link from 'next/link';
import { urlFor } from '../Library/client';

const F_Banner = ({footerBanner: {discount, largeText1, largeText2, saleTime, midText, product, buttonText, image}}) => {
  return (
    <div className='footer-banner-container'>
      <div className='banner-desc'>
        <div className='left'>
          <h3>{largeText1}</h3><br/>
          <h3>{largeText2}</h3>
        </div>
        <div className='right'>
          <p>{discount}</p><br/>
          <h3>{midText}</h3><br/>
          <br/>
          <p>{saleTime}</p>
        </div>
        <img src={urlFor(image)} className='footer-banner-image'/>
      </div>
    </div>
  )
}

export default F_Banner;