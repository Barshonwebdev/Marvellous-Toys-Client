import React from 'react';

const Carousal = () => {
    return (
      <div>
        <div className="carousel w-full  ">
          <div id="item1" className="carousel-item w-full flex justify-center items-center">
            <img src="../../caroufinal1.png" className="w-60 h-fit" />
          </div>
          <div id="item2" className="carousel-item w-full flex justify-center items-center">
            <img src="../../caroufinal2.png" className="w-60 h-fit" />
          </div>
          <div id="item3" className="carousel-item w-full flex justify-center">
            <img src="../../caroufinal3.png" className="w-60" />
          </div>
          
        </div>
        <div className="flex justify-center w-full pb-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          
        </div>
      </div>
    );
};

export default Carousal;