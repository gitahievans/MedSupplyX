import React, { useContext } from "react";
import bpbg from "../assets/img/bpbg.png";


const SingleHosEquipment = ({
  equip,
  input4,
  price,
  setItems,
  setEachItem,
  totalValue,
  setTotalValue,
}) => {
  return (
    <div
      className=" w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center my-6 border-[1px] border-[#1E194F]  lg:grid lg:grid-cols-2"
      id="gloves"
    >
      <div className="py-4">
        <img src={equip.image} alt="bp monitor" className=" w-48 h-48" />
      </div>
      <div className="bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center">
        <h1 className=" text-4xl font-black">{equip.name}</h1>
        <h2 className="text-3xl font-extrabold text-orange-400">
          ${price.bpMonitor}
        </h2>
        <p className="text-2xl font-bold text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          debitis!
        </p>

        <div className="flex w-full rounded-2xl justify-center place-items-center gap-4 p-2 text-black hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500  text-xl font-semibold border border-[0.5px solid #BFBFD9] ">
          <button
            onClick={() => {
              setTotalValue(totalValue + input4.value);
              setEachItem((prev) => {
                const newObj = {
                  ...prev,
                  name: "Blood Pressure Monitor",
                  number: input4.value,
                  price: price.bpMonitor,
                };
                setItems((prev) => {
                  const newArr = [...prev, newObj];
                  return newArr;
                });
                return newObj;
              });
              input4.setShowAdded(true);
              input4.setValue(0);
            }}
            className="text-xl font-bold"
          >
            Add to Cart
          </button>
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            onClick={input4.deduction}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15"
            />
          </svg>
          <input
            type="number"
            min="0"
            name=""
            id="gloves-cart"
            className="border-2 w-10 h-10 flex justify-center items-center text-lg font-bold text-center text-black"
            value={input4.value}
            onChange={input4.onChange}
          />
          <svg
            onClick={input4.increment}
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </div>
        {input4.showAdded && <h1 className="font-bold">{input4.added}</h1>}
      </div>
    </div>
  );
};

export default SingleHosEquipment;
