import bpbg from "../assets/img/bpbg.png";
import glovesbg from "../assets/img/glovesbg.png";
import babybg from "../assets/img/babybg.png";
import equipment from "../assets/img/equipment.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Product from "./Product";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#FBF5FF] flex flex-col items-center mx-auto md:max-w-[1200px] gap-8">
      {" "}
      {/* Entire homepage content */}
      <section className="bg-white mt-8 flex flex-col md:flex-row items-center gap-12 rounded-xl">
        {/* New product */}
        <div className="p-4 flex items-center justify-center">
          <img src={bpbg} alt="bp monitor" className="h-56 md:h-96 md:w-96" />
        </div>
        <div className=" w-3/5 text-[#1E194F] flex flex-col items-center text-center gap-8 px-8">
          <p className="font-extrabold text-2xl">NEW PRODUCT</p>
          <h1 className="font-medium text-xl">BLOOD PRESSURE MONITOR</h1>
          <p className=" font-normal text-base">
            Take control of your health and monitor your blood pressure at home
            with our reliable and easy-to-use blood pressure monitor
          </p>
          <Link to="/equipment#bp">
            <button className="h-12 w-40 bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500  rounded-2xl text-xl font-semibold">
              View Product
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-white flex  items-center gap-8 px-4">
        {/* Different sections */}
    <Product/>
      </section>
      <section className="flex flex-col place-items-center text-center mb-24 lg:w-11/12">
        {" "}
        {/* Featured products */}
        <h1 className="w-10/12 text-4xl font-black">FEATURED PRODUCTS</h1>
        <div className="  w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-[#1E194F] lg:flex-row lg:w-full">
          <img
            src={glovesbg}
            alt="latex gloves"
            className=" w-48 h-48 lg:w-80 lg:h-80"
          />
          <div className="flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8">
            <h1 className=" text-4xl font-black">Latex Gloves</h1>
            <p className="text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, debitis!
            </p>
            <Link to="/consumables#gloves" className="">
              <button className="h-16 w-44 bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500 rounded-2xl text-xl font-extrabold text-[#1E194F]">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="  w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-[#1E194F] lg:flex-row lg:w-full">
          <img
            src={bpbg}
            alt="bp monitor"
            className=" w-48 h-48 lg:w-80 lg:h-80"
          />
          <div className="flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8">
            <h1 className=" text-4xl font-black">Blood Pressure Monitor</h1>
            <p className="text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, debitis!
            </p>
            <Link to="/equipment#bp" className="">
              <button className="h-16 w-44 bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500 rounded-2xl text-xl font-extrabold text-[#1E194F]">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
        <div className="  w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-[#1E194F] lg:flex-row lg:w-full">
          <img
            src={babybg}
            alt="baby cloth"
            className=" w-48 h-48 lg:w-80 lg:h-80"
          />
          <div className="flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8">
            <h1 className=" text-4xl font-black">Baby Cloth</h1>
            <p className="text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis, debitis!
            </p>
            <Link to="/baby#cloth" className="">
              <button className="h-16 w-44 bg-white border-2 hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500 rounded-2xl text-xl font-extrabold text-[#1E194F]">
                SEE PRODUCT
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="w-10/12 flex flex-col gap-12 place-items-center mx-4 mb-36 lg:flex-row lg:w-11/12">
        <img src={equipment} alt="Equipment" className="w-full rounded-2xl" />
        <div>
          <h1 className="text-3xl font-black text-center">
            Bringing you{" "}
            <span className="text-orange-400 font-bold">quality</span> and{" "}
            <span className="text-orange-400 font-bold">affordable</span>{" "}
            hospital equipment, consumables, and baby products
          </h1>
          <p className="text-xl text-gray-700 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
            expedita maxime ea repudiandae atque id voluptas? Repudiandae
            nostrum unde ad perspiciatis omnis optio, non itaque obcaecati
            reiciendis magni, quisquam vero!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
