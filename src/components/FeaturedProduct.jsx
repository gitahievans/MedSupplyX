import React from "react";
import { Link } from "react-router-dom";
import glovesbg from "../assets/img/glovesbg.png";

function FeaturedProduct() {
  return (
    <div className=" rounded-2xl flex flex-wrap items-center justify-center py-8 gap-8 text-center text-[#1E194F] border border-[0.5px solid #BFBFD9]">
      <div className=" flex items-center justify-center">
        <img src={glovesbg} alt="latex gloves" className="w-44 h-32 md:w-72 md:h-60" />
      </div>
      <div className=" w-3/5 text-[#1E194F] flex flex-col items-center text-center gap-8 px-8">
        <h1 className=" text-xl font-black">Latex Gloves</h1>
        <p className="text-sm md:text-base font-medium">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          debitis!
        </p>
        <Link to="/consumables#gloves" className="">
          <button className="h-16 w-44 bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500 rounded-2xl text-sm md:text-base font-semibold text-[#1E194F]">
            SEE PRODUCT
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedProduct;
