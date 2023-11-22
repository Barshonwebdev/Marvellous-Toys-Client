
import  {  useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
 

const Shop = () => {
    
    const [avengers,setAvengers]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/alltoys?sub_category=Avengers")
        .then(res=>res.json())
        .then(data=>setAvengers(data))
    },[])
    const [xmen,setXmen]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/alltoys?sub_category=X-Men")
        .then(res=>res.json())
        .then(data=>setXmen(data))
    },[])
    const [villain,setVillain]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/alltoys?sub_category=Villain")
        .then(res=>res.json())
        .then(data=>setVillain(data))
    },[])
    return (
      <div className="my-10 " data-aos="fade-left">
        <div className="flex justify-center">
          <h3 className=" bg-slate-200 p-5 rounded-xl header-font text-red-700 text-2xl md:text-4xl font-bold">
            Shop by Category
          </h3>
        </div>
        <p className="text-center text-lg text-gray-600 header-font font-semibold my-3">
          We provide multiple categories of figurines . <br /> Browse among them and
          get your own favorite figurine!
        </p>
        <Tabs className="mt-5">
          <TabList className="text-center text-xl text-orange-500 font-bold">
            <Tab>Avengers</Tab>
            <Tab>X-Men</Tab>
            <Tab>Big Bads</Tab>
          </TabList>

          <TabPanel>
            <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 px-8 mt-7">
              {avengers.map((avenger) => (
                <div key={avenger._id}>
                  <div className="card w-fit bg-slate-200 p-5 glass">
                    <figure>
                      <img src={avenger.picture_url} alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className=" text-2xl card-title header-font text-orange-600">
                        {avenger.name} Figurine
                      </h2>
                      <div className="flex justify-between space-x-5">
                        <p className="font-semibold">price: ${avenger.price}</p>
                        <p className="flex items-center">
                          Rating: {avenger.rating}
                          <FaStar className="text-amber-600"></FaStar>
                        </p>
                      </div>
                      <div className="card-actions mt-3 ">
                        <Link to='/details' >
                          {" "}
                          <button className="btn btn-primary">
                            View Details
                          </button>
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 mt-7">
              {xmen.map((xman) => (
                <div key={xman._id}>
                  <div className="card w-fit p-5 glass">
                    <figure>
                      <img src={xman.picture_url} alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className=" text-2xl card-title header-font text-orange-600">
                        {xman.name} Figurine
                      </h2>
                      <div className="flex justify-between space-x-5">
                        <p className="font-semibold">price: ${xman.price}</p>
                        <p className="flex items-center">
                          Rating: {xman.rating}
                          <FaStar className="text-amber-600"></FaStar>
                        </p>
                      </div>
                      <div className="card-actions mt-3 ">
                        <Link to="/details">
                          {" "}
                          <button className="btn btn-primary">
                            View Details
                          </button>
                          
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8 mt-7">
              {villain.map((bad) => (
                <div key={bad._id}>
                  <div className="card w-fit p-5 glass">
                    <figure>
                      <img src={bad.picture_url} alt="car!" />
                    </figure>
                    <div className="card-body">
                      <h2 className=" text-2xl card-title header-font text-orange-600">
                        {bad.name} Figurine
                      </h2>
                      <div className="flex justify-between">
                        <p className="font-semibold">price: ${bad.price}</p>
                        <p className="flex items-center">
                          Rating: {bad.rating}
                          <FaStar className="text-amber-600"></FaStar>
                        </p>
                      </div>
                      <div className="card-actions mt-3 ">
                        <Link to="/details">
                          {" "}
                          <button className="btn btn-primary">
                            View Details
                          </button>
                    
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
        
      </div>
    );
};

export default Shop;