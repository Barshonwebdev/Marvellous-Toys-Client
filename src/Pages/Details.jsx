import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import { Helmet } from "react-helmet";
import titles from "../titles/titles";
const Details = () => {
    useEffect(() => {
      AOS.init();
    }, []);
    const detailsdata=useLoaderData();
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
      <div>
        <Helmet>
            <title>{titles.detail}</title>
        </Helmet>
        <div className="flex flex-col md:flex-row mt-5 mx-3 items-center">
          <div data-aos="fade-right" data-aos-delay="400" className="w-full">
            <img className="" src={detailsdata.picture_url} alt="" />
          </div>
          <div className="md:mx-5 md:px-10" data-aos="flip-left" data-aos-delay="400">
            <div className="from-black to-blue-950 bg-gradient-to-tr md:p-7 p-3 mb-6 space-y-2 text-slate-300   rounded-xl ">
              <h2 className="text-center text-3xl  mb-5 header-font font-bold">
                Detail Card!
              </h2>
              <p className="text-center header-font text-2xl font-semibold  mb-3">
                 {detailsdata.name}
              </p>
              <p>
                <span className="font-bold">Seller: </span> {detailsdata.sellername}{" "}
              </p>
              <p>
                <span className="font-bold">Seller Email: </span>
                {detailsdata.selleremail}{" "}
              </p>
              <p>
                <span className="font-bold">Price: </span>${detailsdata.price}{" "}
              </p>
              <p>
                <span className="font-bold">Rating: </span> {detailsdata.rating}{" "}
                <FaStar className="inline text-sm mb-1 text-yellow-400"></FaStar>{" "}
              </p>
              <p>
                <span className="font-bold">Available Pieces: </span>{" "}
                {detailsdata.available_quantity}
              </p>
              <p>
                <span className="font-bold">Bio: </span> {detailsdata.description}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;