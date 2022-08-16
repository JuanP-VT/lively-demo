import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForBusiness from "./components/ForBusiness/ForBusiness";
import ForIndividuals from "./components/ForIndividuals/ForIndividuals";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route path="/business" element={<ForBusiness />} />
        <Route path="/individuals" element={<ForIndividuals />} />
      </Routes>
    </div>
  );
}

export default App;
