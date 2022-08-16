import React from "react";
import { Link } from "react-router-dom";

interface Props {
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
}
function TopNav({ setCurrentRoute }: Props) {
  // This function is will save in the current route in state
  // whenever one of the two anchor links are clicked
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = e.target as HTMLAnchorElement;
    const route = target.getAttribute("data-route") as string;
    console.log(route);
    setCurrentRoute(route);
  }
  return (
    <div id="TopNav">
      <Link
        id="forBusiness"
        to="/business"
        onClick={(e) => handleClick(e)}
        data-route="/business"
      >
        For Business
      </Link>
      <Link
        id="forIndividuals"
        to="/individuals"
        onClick={(e) => handleClick(e)}
        data-route="/individuals"
      >
        For Individuals
      </Link>
    </div>
  );
}

export default TopNav;
