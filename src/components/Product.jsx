import React from 'react'
import bptwobg from "../assets/img/bp2bg.png";
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className=" bg-gray-200 rounded-2xl flex flex-col items-center relative px-4 ">
      {/* Hospital equipment section */}
      <img
        src={bptwobg}
        alt="bp monitor"
        className=" w-28 h-28 relative bottom-20"
      />
      <h1 className=" text-base font-black relative bottom-10">
        HOSPITAL <br /> EQUIPMENT
      </h1>
      <Link to="/equipment" className="flex gap-3">
        <h2 className=" text-sm font-bold">SHOP</h2>
        <svg
          className="w-8 h-8 text-orange-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Product