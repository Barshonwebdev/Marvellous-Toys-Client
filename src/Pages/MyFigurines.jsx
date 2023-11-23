import { Helmet } from "react-helmet";
import titles from "../titles/titles";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const MyFigurines = () => {
  const [myfigures, setMyfigures] = useState([]);
  const {user}=useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/my?selleremail=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyfigures(data));
  }, []);

  
  return (
    <div>
      <Helmet>
        <title>{titles.my}</title>
      </Helmet>
      
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyFigurines;
