import  { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import titles from '../titles/titles';
import AOS from "aos";
import { FaStar } from "react-icons/fa";
import "aos/dist/aos.css";
import { AuthContext } from '../Providers/AuthProvider';
const AddFigurine = () => {
    
    const {user}=useContext(AuthContext);
    useEffect(() => {
      AOS.init();
    }, []);
    return (
      <div>
        <Helmet>
          <title>{titles.add}</title>
        </Helmet>
        <div className="flex flex-col md:flex-row justify-between ">
          <div className="bg-slate-300 p-9 m-5 rounded-xl md:order-1 order-2">
            <form>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h3 className="text-center text-2xl font-bold mb-5">
                    Figure Post Form
                  </h3>
                  <p className="text-center italic font-semibold">
                    !!Please provide all the informations to post your
                    figurine!!
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="figurename"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Figurine Name
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="figurename"
                            id="figurename"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="Spiderman"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-4">
                      <label
                        htmlFor="url"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Photo URL (Your figure photo link)
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="text"
                            name="url"
                            id="url"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="link"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="bio"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="bio"
                          name="bio"
                          rows={3}
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <p className="mt-3 text-sm leading-6 text-gray-600">
                        Write the description of your figurine
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12">
                  <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price ($)
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="rating"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Rating (1-5) <FaStar className="inline"></FaStar>
                      </label>
                      <div className="mt-2">
                        <input
                          type="number"
                          name="rating"
                          id="rating"
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sub Category
                      </label>
                      <div className="mt-2">
                        <select
                          id="subcategory"
                          name="subcategory"
                          autoComplete="country-name"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        >
                          <option>Avengers</option>
                          <option>X-Men</option>
                          <option>Villain</option>
                        </select>
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="quantity"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Available Quantity
                      </label>
                      <div className="mt-2">
                        <input
                          id="quantity"
                          name="quantity"
                          type="number"
                          className="block w-1/2 rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-x-6 justify-center">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 btn-sm text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Post
                </button>
                
              </div>
            </form>
          </div>
          <div className="w-fit md:me-32 md:mt-32 mt-5 md:order-2 order-1">
            <h2 className="text-center header-font font-bold text-3xl text-orange-600">
              Add your figurine for sell !
            </h2>
            <img
              data-aos="zoom-out"
              data-aos-delay="200"
              src="../../add.png"
              alt=""
            />
            <img
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-4/5 mt-48 hidden md:flex"
              src="../../add2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default AddFigurine;