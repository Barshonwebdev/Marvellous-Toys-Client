import React from 'react';

const Gallery = () => {
    return (
      <div className="my-5 mt-10" data-aos="fade-up-right">
        <h2 className="header-font text-green-600 text-2xl md:text-4xl text-center font-bold">
          Gallery
        </h2>
        <h4 className="header-font mt-4 text-gray-500 text-xl md:text-2xl text-center font-bold">
          Check out our gallery of these fine pieces!
        </h4>
        <div className="carousel w-full mt-5 py-3 ">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="../../Gallery/1.jpg"
              className="w-96 rounded-xl mx-auto "
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide9" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="../../Gallery/2.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="../../Gallery/3.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="../../Gallery/4.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img
              src="../../Gallery/5.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img
              src="../../Gallery/6.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide7" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide7" className="carousel-item relative w-full">
            <img
              src="../../Gallery/7.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide8" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide8" className="carousel-item relative w-full">
            <img
              src="../../Gallery/8.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide7" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide9" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide9" className="carousel-item relative w-full">
            <img
              src="../../Gallery/9.jpg"
              className="w-96 rounded-xl mx-auto"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide8" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;