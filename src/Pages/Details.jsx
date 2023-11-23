import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
        <div className="flex flex-col md:flex-row mt-5 mx-3">
          <div data-aos="fade-right" data-aos-delay="400" className="md:w-5/12">
            <img className="" src={detailsdata.picture_url} alt="" />
          </div>
          <div data-aos="fade-left" data-aos-delay="400">
            <p>{detailsdata.name} Figurine</p>
          </div>
        </div>
      </div>
    );
};

export default Details;