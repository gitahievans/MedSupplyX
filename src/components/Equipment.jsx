import { useEffect } from "react";
import SingleHosEquipment from "./SingleHosEquipment";

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
      if(!window.location.hash){
      window.scrollTo(0, 0);}
    }, []);

  return (
    <div className="flex flex-col place-items-center text-center my-24 text-[#1E194F] md:max-w-[1400px] mx-auto">
      <h1 className="text-5xl font-black mb-12">HOSPITAL EQUIPMENT</h1>
      <SingleHosEquipment />
    </div>
  );
};

export default Equipment;
