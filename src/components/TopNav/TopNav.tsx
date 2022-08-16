import React from "react";
import { Link } from "react-router-dom";

function TopNav() {
  return (
    <div id="TopNav">
      <Link id="forBusiness" to="/business">
        For Business
      </Link>
      <Link id="forIndividuals" to="/individuals">
        For Individuals
      </Link>
    </div>
  );
}

export default TopNav;
