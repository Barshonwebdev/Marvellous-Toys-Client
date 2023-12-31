import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaGoogle } from "react-icons/fa";
import { FaYahoo } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import titles from '../titles/titles';
import { AuthContext } from '../Providers/AuthProvider';


const Login = () => {
    const navigate=useNavigate();
    let location=useLocation();

    const from=location.state?.from?.pathname || '/';
    const [error,setError]=useState("");
    const { googleSignin, yahooSignin, emailSignin } = useContext(AuthContext);
    const handleGoogleSignin=()=>{
        googleSignin()
        .then((result) => {
          const loggedInuser = result.user;
          console.log(loggedInuser);
          navigate(from, {replace:true});
        })
        .catch((error)=>{
            console.log(error);
            setError(error.message);
        })
    }

    const handleYahooSignin=()=>{
        yahooSignin()
          .then((result) => {
            const loggedInuser = result.user;
            console.log(loggedInuser);
            navigate(from, {replace:true});
          })
          .catch((error) => {
            console.log(error);
            setError(error.message);
          });
    }

    const handleEmailSignin=(event)=>{
      event.preventDefault();
      const form=event.target;
      const email=form.email.value;
      const password=form.password.value;
      emailSignin(email,password)
      .then(result=>{
        const userInfo=result.user;
        console.log(userInfo);
        event.target.reset();
        setError('');
        navigate(from, {replace:true});
      })
      .catch(error=>{
        console.log(error)
        setError(error.message)
      })
    }
    return (
      <div>
        
        <Helmet>
          <title>{titles.login}</title>
        </Helmet>
        <div className="hero  bg-base-200">
          <div className="hero-content flex-col lg:flex-row mt-10">
            <div className="text-center lg:text-left md:w-1/2">
              <h1 className="text-5xl font-bold">Login Figurine!</h1>
              <p className="py-6 md:pe-48 text-slate-500">
                Ready to dive in the endless collections of action figures from
                people across the globe? Ready to build your own? Hop in the
                train to sell your own or buy yourself one!
              </p>
              <img
                className="w-1/2 mx-auto md:mx-0"
                src="../../login.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleEmailSignin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name='email'
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
                    name='password'
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input value='Login' type='submit' className="btn btn-success text-white"/>
                </div>{" "}
              </form>
              <div className="card-body pt-0">
                {error &&  ( 
                  <small className="text-red-700">Warning: {error}</small>
                )}
                <p className="text-xs ">Or,</p>
                <div className="flex space-x-6">
                  <button onClick={handleGoogleSignin} className="btn">
                    <FaGoogle className="text-2xl "></FaGoogle> Sign in
                  </button>
                  <button onClick={handleYahooSignin} className="btn">
                    <FaYahoo className="text-2xl text-violet-800"></FaYahoo>
                    Login
                  </button>
                </div>
                <p className="text-sm mt-3">
                  New here? Then quickly{" "}
                  <Link className="text-orange-500 font-bold" to="/register">
                    Register!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;