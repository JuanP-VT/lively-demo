import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
  currentRoute: string;
}
// This function reads from state the current route and then
// changes the css classes of the two anchor elements accordingly
function TopNav({ setCurrentRoute, currentRoute }: Props) {
  useEffect(() => {
    const businessContainer = document.querySelector(
      "#ForBusiness"
    ) as HTMLAnchorElement;
    const individualsContainer = document.querySelector(
      "#ForIndividuals"
    ) as HTMLAnchorElement;
    if (currentRoute === "/individuals") {
      businessContainer.classList.remove("active");
      individualsContainer.classList.add("active");
    }
    if (
      currentRoute === "/business" ||
      currentRoute === "/" ||
      currentRoute === "/lively-demo/"
    ) {
      businessContainer.classList.add("active");
      individualsContainer.classList.remove("active");
    }
  }, [currentRoute]);

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
        id="ForBusiness"
        to="/business"
        onClick={(e) => handleClick(e)}
        data-route="/business"
      >
        For Business
      </Link>
      <Link
        id="ForIndividuals"
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
