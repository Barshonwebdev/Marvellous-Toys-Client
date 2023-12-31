import { Helmet } from 'react-helmet';
import titles from '../titles/titles';
import Carousal from '../HomeComponents/Carousal';
import Gallery from '../HomeComponents/Gallery';
import About from '../HomeComponents/About';
import Stat from '../HomeComponents/Stat';
import FAQ from '../HomeComponents/FAQ';
import AOS from "aos";
import "aos/dist/aos.css";
import Shop from '../HomeComponents/Shop';
import { useEffect } from 'react';
const Home = () => {
  useEffect(()=>{
    AOS.init();
  },[])
    return (
      <div className='overflow-hidden'>
        <p className="text-center mt-5 text-2xl md:text-4xl header-font font-bold">
          Welcome to <span className='text-red-400'>MARVELLOUS TOYS!</span>
        </p>
        <Helmet>
          <title>{titles.home}</title>
        </Helmet>
        <Carousal></Carousal>
        <About></About>
        <Gallery></Gallery>
        <Shop></Shop>
        <Stat></Stat>
        <FAQ></FAQ>
      </div>
    );
};

export default Home;