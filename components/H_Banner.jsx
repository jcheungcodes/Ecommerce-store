import React from 'react';
import Link from 'next/link';
import { urlFor } from '../Library/client';

const H_Banner = ({heroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <h2 className='beats-solo'>{heroBanner.smallText}</h2><br/>
        <br/>
        <h3>Slick Designs!</h3><br/>
        <br/>
        <h3>Latest Models</h3>
        <img src={urlFor(heroBanner.image)} alt='headsets' className='hero-banner-image'/>
        <div>
          <div className='desc'>
            <h5>{heroBanner.desc}</h5>
            <h3>Satisfaction!</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default H_Banner;