import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForBusiness from "./components/composed/ForBusiness/ForBusiness";
import ForIndividuals from "./components/composed/ForIndividuals/ForIndividuals";
import TopNav from "./components/composed/TopNav/TopNav";
import { useLocation } from "react-router-dom";
function App() {
  // This saves the current route in state
  const location = useLocation();
  const [CurrentRoute, setCurrentRoute] = useState(location.pathname);
  // This hook saves current index of carrousel
  const [CurrentIndex, setCurrentIndex] = useState(0);
  // This hook handles current index of carrousel
  useEffect(() => {
    const interval = setInterval(() => {
      // Increase current index each loop
      if (CurrentIndex >= 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((CurrentIndex) => CurrentIndex + 1);
      }
      // remove all 'active' class of all child nodes in container
      const container = document.querySelector(
        "#portraitInd"
      ) as HTMLDivElement;
      const childNodes = container.childNodes;
      childNodes.forEach((elem) => {
        const target = elem as HTMLImageElement;
        target.classList.remove("active");
      });
      // add active to current index
      const target = childNodes[CurrentIndex] as HTMLImageElement;
      target.classList.add("active");
    }, 5000);
    return () => clearInterval(interval);
  }, [CurrentIndex]);
  return (
    <div className="App">
      <TopNav setCurrentRoute={setCurrentRoute} currentRoute={CurrentRoute} />
      <Routes>
        <Route path="/" element={<ForBusiness currentIndex={CurrentIndex} />} />
        <Route
          path="/lively-demo"
          element={<ForBusiness currentIndex={CurrentIndex} />}
        />
        <Route
          path="/business"
          element={<ForBusiness currentIndex={CurrentIndex} />}
        />
        <Route
          path="/individuals"
          element={<ForIndividuals currentIndex={CurrentIndex} />}
        />
      </Routes>
    </div>
  );
}

export default App;
