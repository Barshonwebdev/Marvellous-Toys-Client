import React from "react";
import './Header.css'
const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="header-font">Home</a>
              </li>
              <li>
                <a className="header-font">All Figurines</a>
              </li>
              <li>
                <a className="header-font">My Figurines</a>
              </li>
              <li>
                <a className="header-font">Add a Figurine</a>
              </li>

              <li>
                <a className="header-font">Blogs</a>
              </li>
            </ul>
          </div>
          <img className="w-72 animate-pulse" src="../../../logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex space-x-6 font-bold text-2xl text-slate-700">
          
          
              <a className="header-font">Home</a>
            
            
              <a className="header-font">All Figurines</a>
            
            
              <a className="header-font">My Figurines</a>
            
          
              <a className="header-font">Add a Figurine</a>
            

            
              <a className="header-font">Blogs</a>
            
          
        </div>
        <div className="navbar-end">
          <a className="btn ">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
