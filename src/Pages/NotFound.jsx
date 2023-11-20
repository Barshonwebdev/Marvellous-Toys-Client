import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
      <div className="md:flex items-center md:px-14 px-10 md:mx-10 mx-5 mt-20">
        <h3 className="md:text-2xl text-lg px-2 py-2 md:p-5 bg-slate-200 rounded-xl">
          <span className="md:text-5xl text-red-600">404! Not found!</span> But no worries,
          your friendly neighbourhood spiderman will
          <Link to='/'>
            <button className="btn btn-info ms-4 md:ms-0 md:mt-4">swing you back home!</button>
          </Link>
        </h3>
        <img src="../../404.png" alt="" />
      </div>
    );
};

export default NotFound;