import { useEffect } from 'react';
import SingleHosConsumable from './SingleHosConsumable';


const Consumables = () => {
    
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
      <div className="flex flex-col place-items-center text-center my-24">
        <h1 className="text-5xl font-black mb-12">HOSPITAL CONSUMABLES</h1>
        <SingleHosConsumable
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYECfscq_U7Hd_RYYf5MRgsvolvXC6BRDkUg&usqp=CAU"
          name="Latex gloves"
        />
        <SingleHosConsumable
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjchw3n5402Gn_kLlZTv2cIe82eIIyoF-EQ&usqp=CAU"
          name="Oral dispenser"
        />
        <SingleHosConsumable
          image="https://imaginecare.co.ke/wp-content/uploads/2020/04/1-1.jpg"
          name="Face masks  "
        />
      </div>
    );
}
 
export default Consumables;