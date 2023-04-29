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
        <SingleHosConsumable />
      </div>
    );
}
 
export default Consumables;