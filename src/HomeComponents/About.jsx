import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <div className="mt-14">
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="../../about.png"
              className=" rounded-lg shadow-2xl order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h1 className="text-5xl text-center md:text-start font-bold text-amber-600 header-font">
                About us!
              </h1>
              <p className="py-6 md:w-1/2 font-semibold">
                We, for starters are the first company to bring you legitimate
                action figures of marvel superheroes. From the avengers to the
                x-men, we are covering a wide range of{" "}
                <span className="text-red-500">`marvellous toys`</span> to
                strenghten your action figure collection. You can know more on
                either the FAQ section or you can check out our blogs by
                clicking on this button
              </p>
              <Link to='/blogs'>
                <button className="btn btn-info text-white">Blogs</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;