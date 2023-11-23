import { Helmet } from "react-helmet";
import titles from "../titles/titles";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast("Figurine Deleted Successfully!");

const MyFigurines = () => {
  const [myfigures, setMyfigures] = useState([]);
  const [asc,setAsc]=useState(true);
  const {user}=useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/my?selleremail=${user.email}&sort=${asc?'asc':'desc'}`)
      .then((res) => res.json())
      .then((data) => setMyfigures(data));
  }, [asc]);

  const handleDelete=(id)=>{
    const proceed= confirm("Are you sure you want to delete this figurine of yours?");
    if(proceed){
        fetch(`http://localhost:5000/my/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                notify();
                const remaining=myfigures.filter((myfigure)=>myfigure._id!==id);
                setMyfigures(remaining);
            }
        })
    }
  }
  return (
    <div>
      <Helmet>
        <title>{titles.my}</title>
      </Helmet>

      <div className="overflow-x-auto mt-10">
        <div className="flex justify-center mb-5 md:justify-end space-x-5 items-center me-10">
          <small className="text-md font-bold"> showing by price:</small>

          <button
            onClick={() => setAsc(!asc)}
            className="btn text-white hover:bg-slate-700 bg-orange-900 btn-sm"
          >
            {asc ? "Low to high" : "High to low"}
          </button>
        </div>
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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myfigures.map((figure) => (
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
                <td>
                  <button className="btn-info btn-sm btn hover:bg-teal-800">
                    <FaPen className="text-white"></FaPen>
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(figure._id)}
                    className="btn-error btn-sm btn hover:bg-red-800"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #713200",

            color: "red",
          },
        }}
      ></Toaster>
    </div>
  );
};

export default MyFigurines;
