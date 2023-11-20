import React from 'react';
import { Link } from 'react-router-dom';
import titles from '../titles/titles';
import { Helmet } from 'react-helmet';

const Register = () => {
    return (
      <div>
        <Helmet>
          <title>{titles.register}</title>
        </Helmet>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse mt-10">
            <div className="text-center lg:text-left md:w-1/2 relative">
              <h1 className="text-5xl font-bold">Action: Register!</h1>
              <p className="py-6 md:pe-8 text-slate-500">
                As this is the first time of your account creating, know that
                you will be blown away by the endless surprises of action
                figurines coming your way. Enjoy!
              </p>
              <img
                className="w-1/2 mx-auto md:mx-0 "
                src="../../register.png"
                alt=""
              />
            </div>
            <div className="card md:me-9  w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="full name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="link"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-info text-white">Register</button>
                  <p className="text-sm mt-3">
                    Already have an account? Then quickly{" "}
                    <Link className="text-orange-500 font-bold" to="/login">
                      Login!
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;