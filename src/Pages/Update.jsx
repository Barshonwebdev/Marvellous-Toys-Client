import { Helmet } from "react-helmet";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import titles from "../titles/titles";
import { useEffect } from "react";
const notifyUpdate = () => toast("Figurine Details Updated!");
const Update = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const updateInfo = useLoaderData();
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const priceElement = form.price.value;
    const price = parseFloat(priceElement);
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updateDoc = {
      price: price,
      available_quantity: quantity,
      description: description,
    };

    fetch(
      `https://marvellous-toys-server-production.up.railway.app/my/${updateInfo._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateDoc),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          notifyUpdate();
        }
      });
  };
  return (
    <div>
      <div>
        <div className="flex flex-col md:flex-row mt-5 mx-3 items-center">
          <div
            data-aos="flip-right"
            className="bg-slate-300 p-9 m-5 rounded-xl md:order-1 order-2"
          >
            <form onSubmit={handleUpdate}>
              <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                  <h3 className="font-bold header-font text-3xl text-center text-orange-600">
                    Figurine Update Form!
                  </h3>
                  <p className="py-4 text-xl font-bold text-center">
                    {updateInfo.name} Figurine
                  </p>
                  <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Price
                      </label>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="number"
                            name="price"
                            id="price"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={updateInfo.price}
                          />
                        </div>
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
                        <div className="flex bg-white w-1/2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                            type="number"
                            name="quantity"
                            id="quantity"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            defaultValue={updateInfo.available_quantity}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          defaultValue={updateInfo.description}
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
                  Update
                </button>
              </div>
            </form>
          </div>

          <div className=" mb-5 order-1 md:order-2 ">
            <img className="" src={updateInfo.picture_url} alt="" />
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "2px solid #713200",

            color: "green",
          },
        }}
      ></Toaster>
      <Helmet>
        <title>{titles.update}</title>
      </Helmet>
    </div>
  );
};

export default Update;
