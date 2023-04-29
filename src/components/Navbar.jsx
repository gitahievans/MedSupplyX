import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { GlovesValueContext } from "./context/GlovesValueContext";
import { TotalValueContext } from "./context/TotalValueContext";
import hamburgerIcon from "../assets/icons/hamburger-menu.svg"
import cart from "../assets/icons/cart.svg";

const Navigation = () => {
  const {
    glovesValue,
    setGlovesValue,
    babyValue,
    setBabyValue,
    bpValue,
    setBpValue,
  } = useContext(GlovesValueContext);

  const { totalValue, setTotalValue } = useContext(TotalValueContext);

  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav)
  };

  return (
    <header className=" py-8 w-full text-[#1E194F] flex flex-col justify-around border-b-2 gap-8 ">
      <div className="flex justify-around place-items-center">
        <img
          src={hamburgerIcon}
          alt=""
          className="w-10 h-10 cursor-pointer"
          onClick={toggleNav}
        />
        <Link to="/">
          <h1 className=" text-3xl font-extrabold text-center">MedSupplyX</h1>
        </Link>
        <Link to="/checkout">
          <div className="flex">
            <img src={cart} alt="" className="w-10 h-10" />
            <h1 className="text-center text-2xl font-extrabold">
              {totalValue}
            </h1>
          </div>
        </Link>
      </div>
      {nav && (
        <div className=" flex flex-col justify-around text-center text-xl gap-3 font-bold mt-4 lg:flex-row ">
          <Link
            to="/"
            className="flex flex-col justify-center hover:border-b-[1px] border-b-[#9A4B9C] "
          >
            Home
          </Link>
          <Link
            to="/equipment"
            className=" hover:border-b-[1px] border-b-[#9A4B9C] "
          >
            Hospital Equipment
          </Link>
          <Link
            to="/consumables"
            className=" hover:border-b-[1px] border-b-[#9A4B9C] "
          >
            Hospital Consumables
          </Link>
          <Link
            to="/baby"
            className=" hover:border-b-[1px] border-b-[#9A4B9C] "
          >
            Baby Products
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navigation;
