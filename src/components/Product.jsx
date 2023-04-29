import React from 'react'
import bptwobg from "../assets/img/bp2bg.png";
import go from "../assets/icons/tour-arrow-icon.svg";
import { Link } from 'react-router-dom';

function Product({ prod }) {
  return (
    <div className="flex flex-col items-center w-[220px] border-[0.5px] rounded-lg gap-4 p-4">
      <img src={bptwobg} alt="bp monitor" className="w-[100px] " />
      <h1 className=" text-base font-black bottom-10">Hosptal products</h1>
      <Link
        to="/equipment"
        className=" bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500  rounded-2xl text-xl font-semibold flex items-center px-8 py-2 gap-2"
      >
        <p className=" text-sm font-bold">SHOP</p>
        <img src={go} alt="go" className='bg-white'/>
      </Link>
    </div>
  );
}

export default Product