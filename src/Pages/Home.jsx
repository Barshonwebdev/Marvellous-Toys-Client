import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';
import Carousal from '../HomeComponents/Carousal';
import Gallery from '../HomeComponents/Gallery';
import About from '../HomeComponents/About';

const Home = () => {
    return (
      <div>
        <p className="text-center mt-5 text-2xl md:text-4xl header-font font-bold">
          Welcome to <span className='text-red-400'>MARVELLOUS TOYS!</span>
        </p>
        <Helmet>
          <title>{titles.home}</title>
        </Helmet>
        <Carousal></Carousal>
        <About></About>
        <Gallery></Gallery>
      </div>
    );
};

export default Home;