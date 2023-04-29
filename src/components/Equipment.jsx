import { useContext, useEffect } from "react";
import SingleHosEquipment from "./SingleHosEquipment";
import { v4 as uuidv4 } from "uuid";
import { PriceContext } from "./context/PriceContext";
import { ValueContext } from "./context/ValueContext";
import { GlovesValueContext } from "./context/GlovesValueContext";
import { TotalValueContext } from "./context/TotalValueContext";
import { ItemNumberContext } from "./context/ItemNumber";

const Equipment = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
  const useInput = useContext(ValueContext);
  const { bpValue, setBpValue } = useContext(GlovesValueContext);
  const { items, setItems } = useContext(ItemNumberContext);
  const { eachItem, setEachItem } = useContext(ItemNumberContext);
  const { totalValue, setTotalValue } = useContext(TotalValueContext);

  const price = useContext(PriceContext);

  const input1 = useInput(0);
  const input2 = useInput(0);
  const input3 = useInput(0);
  const input4 = useInput(0);
  const input5 = useInput(0);
  const input6 = useInput(0);

  setBpValue(
    input1.value +
      input2.value +
      input3.value +
      input4.value +
      input5.value +
      input6.value
  );
  const medicalItems = [
    {
      id: uuidv4(),
      name: "Blood Pressure Monitor",
      image:
        "https://comfyshc.com/wp-content/uploads/2020/06/Omron-M1-Basic-Blood-Pressure-Machine.jpg",
    },
    {
      id: uuidv4(),
      name: "Thermometer",
      image:
        "https://www.microtekdirect.com/product-images/2022/02/05/158/microtek-digital-thermometer-t15-sl-2.webp",
    },
    {
      id: uuidv4(),
      name: "Stethoscope",
      image:
        "https://i0.wp.com/imaginecare.co.ke/wp-content/uploads/2022/08/Hmyl-Medical-Stethoscope.jpg?fit=950%2C950&ssl=1",
    },
  ];

  return (
    <div className="flex flex-col place-items-center text-center my-24 text-[#1E194F] md:max-w-[1400px] mx-auto">
      <h1 className="text-5xl font-black mb-12">HOSPITAL EQUIPMENT</h1>
      {medicalItems.map((equip) => (
        <SingleHosEquipment equip={equip} key={equip.id} input4={input4} price={price} setItems={setItems} setEachItem={setEachItem} totalValue={totalValue} setTotalValue={setTotalValue} />
      ))}
    </div>
  );
};

export default Equipment;
