import React from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const AllFigurines = () => {
    const searchRef=useRef(null);
    const [allfigures,setAllfigures]=useState([]);
    const[search,setSearch]=useState('');
    useEffect(()=>{
        fetch(`http://localhost:5000/all?search=${search}`)
        .then(res=>res.json())
        .then(data=>setAllfigures(data))
    },[search])

    const handleSearch=()=>{
        console.log(searchRef.current.value);
        const fieldValue=searchRef.current.value;
        setSearch(fieldValue);
    }
    return (
      <div>
        <Helmet>
          <title>{titles.all}</title>
        </Helmet>
        <div className="flex justify-center items-center ">
          <FaSearch className="mt-5 me-2"></FaSearch>
          <input
            ref={searchRef}
            type="text"
            placeholder="figure name"
            className="input input-bordered max-w-xs mt-5"
          />
          <button onClick={handleSearch} className='btn-success btn-sm md:btn-md btn mt-5 ms-2 text-white'>Browse</button>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="table table-xs md:table-md">
            {/* head */}
            <thead>
              <tr className="md:text-lg ">
                <th>Image</th>
                <th>Seller</th>
                <th>Figure</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allfigures.map((figure) => (
                <tr key={figure._id}>
                  <td>
                    <img className="w-16" src={figure.picture_url} alt="" />
                  </td>
                  <td>{figure.sellername}</td>
                  <td>{figure.name}</td>
                  <td>{figure.sub_category}</td>
                  <td>${figure.price}</td>
                  <td className="">{figure.available_quantity} pieces</td>
                  <td>
                    <Link to={`/details/${figure._id}`}>
                      <button className="btn btn-primary btn-sm md:btn-md">
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllFigurines;