import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForBusiness from "./components/ForBusiness/ForBusiness";
import ForIndividuals from "./components/ForIndividuals/ForIndividuals";
import TopNav from "./components/TopNav/TopNav";
import { useLocation } from "react-router-dom";
function App() {
  // This saves the current route in state
  const location = useLocation();
  const [CurrentRoute, setCurrentRoute] = useState(location.pathname);
  console.log(location.pathname);
  return (
    <div className="App">
      <TopNav setCurrentRoute={setCurrentRoute} currentRoute={CurrentRoute} />
      <Routes>
        <Route path="/" element={<ForBusiness />} />
        <Route path="/lively-demo" element={<ForBusiness />} />
        <Route path="/business" element={<ForBusiness />} />
        <Route path="/individuals" element={<ForIndividuals />} />
      </Routes>
    </div>
  );
}

export default App;
