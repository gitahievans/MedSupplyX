import { useEffect } from "react";
import SingleBabyItem from "./SingleBabyItem";

const Baby = () => {
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

  return (
    <div className="flex flex-col place-items-center text-center my-24">
      <h1 className="text-5xl font-black mb-12">BABY PRODUCTS</h1>
      <SingleBabyItem
        image={
          "https://static.vecteezy.com/system/resources/previews/022/122/051/original/pink-cartoon-baby-girl-bodysuit-with-a-heart-baby-clothes-store-newborn-childbirth-baby-care-babyhood-childhood-concept-gender-reveal-isolated-illustration-png.png"
        }
        name="Baby Cloth"
      />
      <SingleBabyItem
        image={
          "https://ph-test-11.slatic.net/p/38f92e258cb8c2f0a9d239e6d5ca2703.jpg"
        }
        name="Baby Powder"
      />
      <SingleBabyItem
        image={
          "https://www.degrocery.com/de-grocery/2019/09/1.JOHNSONS-BABY-BATH-600ML.jpg"
        }
        name="Baby Bath"
      />
    </div>
  );
};

export default Baby;
