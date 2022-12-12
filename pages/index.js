import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import {Products, F_Banner, H_Banner} from '../components';
import {client} from '../Library/client';

const Home = ({items, bannerData}) => (
    <div>
      <H_Banner heroBanner={bannerData.length && bannerData[0]}/>
      <div className='products-heading'>
        <h2>Best-Sellers</h2>
        <p>A variety of tech gear</p>
      </div>
      <div className='products-container'>
        {items?.map((product) => <Products key={product._id} product={product}/>)}
      </div>
      <F_Banner footerBanner ={bannerData && bannerData[0]}/>
    </div>
  );

  export const getServerSideProps = async() => {
    const query = '*[_type == "product"]';
    const items = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);

    return{
      props: {items, bannerData}
    }
  };

export default Home;