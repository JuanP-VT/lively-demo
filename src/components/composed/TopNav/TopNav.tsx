import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  setCurrentRoute: React.Dispatch<React.SetStateAction<string>>;
  currentRoute: string;
}

function TopNav({ setCurrentRoute, currentRoute }: Props) {
  // This function reads the current route from state and then
  // toggles a css class on the anchor elements accordingly
  useEffect(() => {
    const businessAnchor = document.querySelector(
      "#ForBusiness"
    ) as HTMLAnchorElement;
    const individualsAnchor = document.querySelector(
      "#ForIndividuals"
    ) as HTMLAnchorElement;
    if (currentRoute === "/individuals") {
      businessAnchor.classList.remove("active");
      individualsAnchor.classList.add("active");
    }
    if (
      currentRoute === "/business" ||
      currentRoute === "/" ||
      currentRoute === "/lively-demo/"
    ) {
      businessAnchor.classList.add("active");
      individualsAnchor.classList.remove("active");
    }
  }, [currentRoute]);

  // This function saves the current route in state
  // whenever one of the two anchor links are clicked
  // Anchor elements have a data-route attribute
  function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    const target = e.target as HTMLAnchorElement;
    const route = target.getAttribute("data-route") as string;
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
