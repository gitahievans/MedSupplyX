import "./index.css";
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Consumables from "./components/Consumables";
import Equipment from "./components/Equipment";
import Baby from "./components/Baby";
import { PriceContext } from "./components/context/PriceContext";
import { ValueContext } from "./components/context/ValueContext";
import { useState } from "react";
import { useContext } from "react";
import { GlovesValueContext } from "./components/context/GlovesValueContext";
import { TotalValueContext } from "./components/context/TotalValueContext";
import Checkout from "./components/Checkout";
import { ItemNumberContext } from "./components/context/ItemNumber";

function App() {
  const [price, setPrice] = useState({
    babyCloth: 12.99,
    bpMonitor: 19.99,
    gloves: 9.99,
  });

  function useInput(initialValue = 0) {
    const [value, setValue] = useState(initialValue);
    const [added, setAdded] = useState("Added to Cart");
    const [showAdded, setShowAdded] = useState(false);

    const onChange = (event) => {
      const newGlovesValue = event.target.value;
      const newValue = event.target.value;
      setValue(newValue);
    };

    const increment = () => {
      setValue((prevValue) => {
        const newPrevValue = parseInt(prevValue);
        return newPrevValue + 1;
      });
    };

    const deduction = () => {
      setValue((prevValue) => {
        const newPrevValue = parseInt(prevValue);
        return newPrevValue - 1;
      });
    };

    return {
      value,
      setValue,
      onChange,
      increment,
      deduction,
      added,
      setAdded,
      showAdded,
      setShowAdded,
    };
  }

  const [glovesValue, setGlovesValue] = useState(null);
  const [bpValue, setBpValue] = useState(null);
  const [babyValue, setBabyValue] = useState(null);

  const [totalValue, setTotalValue] = useState(0);

  const [items, setItems] = useState([]);
  const [eachItem, setEachItem] = useState({});

  return (
    <div className="App scroll-smooth font-ff-poppins">
      <PriceContext.Provider value={price}>
        <ValueContext.Provider value={useInput}>
          <GlovesValueContext.Provider
            value={{
              glovesValue,
              setGlovesValue,
              babyValue,
              setBabyValue,
              bpValue,
              setBpValue,
            }}
          >
            <TotalValueContext.Provider value={{ totalValue, setTotalValue }}>
              <ItemNumberContext.Provider
                value={{ items, setItems, eachItem, setEachItem }}
              >
                <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/consumables" element={<Consumables />} />
                  <Route path="/equipment" element={<Equipment />} />
                  <Route path="/baby" element={<Baby />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
                <Footer />
              </ItemNumberContext.Provider>
            </TotalValueContext.Provider>
          </GlovesValueContext.Provider>
        </ValueContext.Provider>
      </PriceContext.Provider>
    </div>
  );
}

export default App;
