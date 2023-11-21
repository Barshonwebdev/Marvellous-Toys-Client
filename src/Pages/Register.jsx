import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import titles from '../titles/titles';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const [error,setError]=useState("");
  const navigate=useNavigate();
  const {createUser,update}=useContext(AuthContext);
  const handleRegister=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    const name=form.name.value;
    const url=form.url.value;
    createUser(email, password)
      .then((result) => {
        const loggedInuser = result.user;
        update(loggedInuser,name,url);
        console.log(loggedInuser);
        event.target.reset();
        setError('');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  }
    return (
      <div>
        <Helmet>
          <title>{titles.register}</title>
        </Helmet>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse mt-10">
            <div className="text-center lg:text-left md:w-1/2 relative">
              <h1 className="text-5xl font-bold">Action: Register!</h1>
              <p className="py-6 md:pe-44 text-slate-500">
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
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name='name'
                    placeholder="full name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
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
                    name="password"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    name='url'
                    placeholder="link"
                    className="input input-bordered"
                  />
                </div>
                {error && <small className='text-red-600'>Warning: {error}</small>}
                <div className="form-control mt-6">
                  <input
                    value="Register"
                    type="submit"
                    className="btn btn-info text-white"
                  />
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