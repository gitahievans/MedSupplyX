import bpbg from "../assets/img/bpbg.png";
import equipment from "../assets/img/equipment.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Product from "./Product";
import FeaturedProduct from "./FeaturedProduct";

const Homepage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const products = [
    {
      product:  "Hospital Equipment",
    },
    {
      product: "Baby Products",
    },
    {
      product: "Hospital Consumables",
    }
  ];

  const featuredProducts = [
    {
      product: "Latex Gloves",
    },
    {
      product: "Blood Pressure Monitor",
    },
    {
      product: "Baby Cloth",
    },
  ];
  const uniqueFeaturedProducts = featuredProducts.map((product) => ({
    id: crypto.randomUUID(), ...product
  }));

  const uniqueProds = products.map(product => ({id:crypto.randomUUID(), ...product}))

  return (
    <main className="bg-[#FCFCFC flex flex-col items-center mx-auto md:max-w-[1200px] gap-8 px-1">
      {" "}
      {/* Entire homepage content */}
      <section className="bg-white mt-8 flex flex-col md:flex-row items-center py-4 border border-[0.5px solid #BFBFD9] rounded-xl">
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
      <section className="bg-white w-full flex gap-4 py-4 px-2 items-center justify-center border border-[0.5px solid #BFBFD9] rounded-xl flex-wrap">
        {uniqueProds.map(({ prod, id }) => (
          <Product key={id} />
        ))}
      </section>
      <section className="bg-white w-full flex flex-col items-center text-center border border-[0.5px solid #BFBFD9] rounded-xl py-2 gap-4">
        {/* Featured products */}
        <h1 className="w-10/12 text-3xl font-semibold">FEATURED PRODUCTS</h1>
        {uniqueFeaturedProducts.map(({ product, id }) => (
          <FeaturedProduct key={id} />
        ))}
      </section>
      <section className="bg-white mt-8 flex flex-col md:flex-row items-center p-4 gap-4 border border-[0.5px solid #BFBFD9] rounded-xl">
        <img src={equipment} alt="Equipment" className="rounded-2xl" />
        <div className=" w-3/5 text-[#1E194F] flex flex-col items-center text-center gap-8 px-8">
          <h1 className="text-base md:text-lg font-black text-center">
            Bringing you{" "}
            <span className="text-[#9A4B9C] font-semibold">quality</span> and{" "}
            <span className="text-[#9A4B9C] font-semibold">affordable</span>{" "}
            hospital equipment, consumables, and baby products
          </h1>
          <p className="text-sm md:text-base text-gray-700 text-justify">
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
