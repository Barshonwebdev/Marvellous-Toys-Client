import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAvengers from "../Hooks/useAvengers";
import useXmen from "../Hooks/useXmen";
import useAntihero from "../Hooks/useAntihero";
import useVillain from "../Hooks/useVillain";

const Shop = () => {
  
  const avengers=useAvengers();
  const xmen=useXmen();
  const antihero=useAntihero();
  const villain=useVillain();
  
  
  return (
    <div className="my-10 " data-aos="fade-left">
      <div className="flex justify-center">
        <h3 className=" bg-slate-200 p-5 rounded-xl header-font text-red-700 text-2xl md:text-4xl font-bold">
          Shop by Category
        </h3>
      </div>
      <p className="text-center text-lg text-gray-600 header-font font-semibold my-3">
        We provide multiple categories of figurines . <br /> Browse among them
        and get your own favorite figurine!
      </p>
      <Tabs className="mt-5">
        <TabList className="text-center text-xl text-orange-500 font-bold">
          <Tab>Avengers</Tab>
          <Tab>X-Men</Tab>
          <Tab>Big Bads</Tab>
          <Tab>Anti-Hero</Tab>
        </TabList>

        <TabPanel>
          <div className="grid  grid-cols-1 md:grid-cols-3 gap-4 px-8 mt-7">
            {avengers[0].map((avenger) => (
              <div key={avenger._id}>
                <div className="card w-fit bg-slate-200 p-5 glass">
                  <figure>
                    <img src={avenger.picture_url} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl card-title header-font text-orange-600">
                      {avenger.name} Figurine
                    </h2>
                    <div className="flex justify-between space-x-2">
                      <p className="font-semibold">Price: ${avenger.price}</p>
                      <p className="flex items-center">
                        Rating: {avenger.rating}
                        <FaStar className="text-amber-600"></FaStar>
                      </p>
                    </div>
                    <div className="card-actions mt-3 ">
                      <Link to={`/details/${avenger._id}`}>
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
            {xmen[0].map((xman) => (
              <div key={xman._id}>
                <div className="card w-fit bg-slate-200 p-5 glass">
                  <figure>
                    <img src={xman.picture_url} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl card-title header-font text-orange-600">
                      {xman.name} Figurine
                    </h2>
                    <div className="flex justify-between space-x-5">
                      <p className="font-semibold">Price: ${xman.price}</p>
                      <p className="flex items-center">
                        Rating: {xman.rating}
                        <FaStar className="text-amber-600"></FaStar>
                      </p>
                    </div>
                    <div className="card-actions mt-3 ">
                      <Link to={`/details/${xman._id}`}>
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
            {villain[0].map((bad) => (
              <div key={bad._id}>
                <div className="card w-fit bg-slate-200 p-5 glass">
                  <figure>
                    <img src={bad.picture_url} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl card-title header-font text-orange-600">
                      {bad.name} Figurine
                    </h2>
                    <div className="flex justify-between">
                      <p className="font-semibold">Price: ${bad.price}</p>
                      <p className="flex items-center">
                        Rating: {bad.rating}
                        <FaStar className="text-amber-600"></FaStar>
                      </p>
                    </div>
                    <div className="card-actions mt-3 ">
                      <Link to={`/details/${bad._id}`}>
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
            {antihero[0].map((anti) => (
              <div key={anti._id}>
                <div className="card w-fit bg-slate-200 p-5 glass">
                  <figure>
                    <img src={anti.picture_url} alt="car!" />
                  </figure>
                  <div className="card-body">
                    <h2 className=" text-2xl card-title header-font text-orange-600">
                      {anti.name} Figurine
                    </h2>
                    <div className="flex justify-between">
                      <p className="font-semibold">Price: ${anti.price}</p>
                      <p className="flex items-center">
                        Rating: {anti.rating}
                        <FaStar className="text-amber-600"></FaStar>
                      </p>
                    </div>
                    <div className="card-actions mt-3 ">
                      <Link to={`/details/${anti._id}`}>
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
