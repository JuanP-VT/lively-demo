import React from "react";
import imgOne from "../../img/individual.avif";
import imgTwo from "../../img/individualOne.avif";
import imgThree from "../../img/individualTwo.avif";
import Carrousel from "./Carrousel";

function IndividualsContent() {
  return (
    <div className="content">
      <div className="left">
        <p className="header">The Modern Health Saving Account</p>
        <p className="p">
          Lively helps people prepare for tomorrow by making smart decisions
          about finances and healthcare today.
        </p>
        <button className="greenBtn">Learn More</button>
      </div>
      <div className="right">
        <Carrousel
          imgOneSrc={imgOne}
          imgTwoSrc={imgTwo}
          imgThreeSrc={imgThree}
        />
      </div>
    </div>
  );
}

export default IndividualsContent;
