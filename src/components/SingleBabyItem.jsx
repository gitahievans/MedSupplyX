import React from "react";
import babybg from "../assets/img/babybg.png";
import { useContext } from "react";
import { PriceContext } from "./context/PriceContext";
import { ValueContext } from "./context/ValueContext";
import { GlovesValueContext } from "./context/GlovesValueContext";
import { TotalValueContext } from "./context/TotalValueContext";
import { ItemNumberContext } from "./context/ItemNumber";

const SingleBabyItem = ({image, name}) => {
  const { babyValue, setBabyValue } = useContext(GlovesValueContext);
  const { items, setItems } = useContext(ItemNumberContext);
  const { eachItem, setEachItem } = useContext(ItemNumberContext);
  const { totalValue, setTotalValue } = useContext(TotalValueContext);

  const price = useContext(PriceContext);
  const useInput = useContext(ValueContext);

  const input1 = useInput(0);
  const input2 = useInput(0);
  const input3 = useInput(0);
  const input4 = useInput(0);
  const input5 = useInput(0);
  const input6 = useInput(0);

  setBabyValue(
    input1.value +
      input2.value +
      input3.value +
      input4.value +
      input5.value +
      input6.value
  );

  return (
    <div
      className=" w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-[1px] border-[#1E194F]  lg:grid lg:grid-cols-2"
      id="gloves"
    >
      <div className="py-4">
        <img src={image} alt="baby cloth" className=" w-48 h-48" />
      </div>
      <div className="bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center">
        <h1 className=" text-4xl font-black">{name}</h1>
        <h2 className="text-3xl font-extrabold text-orange-400">
          ${price.babyCloth}
        </h2>
        <p className="text-2xl font-bold text-gray-700">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis,
          debitis!
        </p>

        <div className="flex w-full rounded-2xl justify-center place-items-center gap-4 p-2 text-black hover:text-white hover:bg-[#1E194F] transition ease-in-out duration-500  text-xl font-semibold border border-[0.5px solid #BFBFD9] ">
          <button
            onClick={() => {
              setTotalValue(totalValue + input1.value);
              setEachItem((prev) => {
                const newObj = {
                  ...prev,
                  name: "Baby Cloth",
                  number: input1.value,
                  price: price.babyCloth,
                };
                setItems((prev) => {
                  const newArr = [...prev, newObj];
                  return newArr;
                });
                return newObj;
              });
              input1.setShowAdded(true);
              input1.setValue(0);
            }}
            className=" text-xl font-bold"
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
            onClick={input1.deduction}
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
            className="border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center text-black"
            value={input1.value}
            onChange={input1.onChange}
          />

          <svg
            onClick={input1.increment}
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
        {input1.showAdded && <h1 className="font-bold">{input1.added}</h1>}
      </div>
    </div>
  );
};

export default SingleBabyItem;
