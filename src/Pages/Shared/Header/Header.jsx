import { useContext, useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
const Header = () => {
  const {user, logout}=useContext(AuthContext);
  
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
                <Link to="/" className="header-font">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/all" className="header-font">
                  All Figurines
                </Link>
              </li>
              {user && (
                <div>
                  <li>
                    <Link to="/my" className="header-font">
                      My Figurines
                    </Link>
                  </li>
                  <li>
                    <Link to="/add" className="header-font">
                      Add a Figurine
                    </Link>
                  </li>
                </div>
              )}

              <li>
                <Link to="/blogs" className="header-font">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <img className="w-72 animate-pulse" src="../../../logo.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex space-x-2 font-bold  text-slate-700">
          <Link to="/" className="btn btn-ghost header-font text-2xl">
            Home
          </Link>
          <Link to="/all" className="btn btn-ghost header-font text-2xl">
            All Figurines
          </Link>
          
            <div>
              <Link to="/my" className="btn btn-ghost header-font text-2xl">
                My Figurines
              </Link>
              <Link to="/add" className="btn btn-ghost header-font text-2xl">
                Add a Figurine
              </Link>
            </div>
          
          <Link to="/blogs" className="header-font btn btn-ghost text-2xl">
            Blogs
          </Link>
        </div>
        <div className="navbar-end ms-10">
          {user ? (
            <div className="flex items-center space-x-3 ">
              <div className="flex flex-col items-center">
                <img className="w-6 rounded-lg" src={user.photoURL} alt="" />
                <p className="text-sm text-teal-800">
                  {user.displayName && user.displayName.split(" ")[0]}
                </p>
              </div>
              <button onClick={logout} className="btn font-bold">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn font-bold">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
