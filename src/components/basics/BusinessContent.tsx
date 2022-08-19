import React, { useEffect, useState } from "react";
import imgOne from "../../img/business.avif";
import imgTwo from "../../img/businessOne.avif";
import imgThree from "../../img/businessTwo.avif";
import Carrousel from "./Carrousel";
type Props = {
  currentIndex: number;
};
function BusinessContent({ currentIndex }: Props) {
  return (
    <div className="content">
      <div className="left">
        <p className="header">HSA administration for employers, simplified</p>
        <p className="p">
          Lively takes care of the heavy lifting so you can manage your health
          saving account program with ease.
        </p>
        <button className="greenBtn"> Learn More</button>
      </div>
      <div className="right">
        <Carrousel
          imgOneSrc={imgOne}
          imgTwoSrc={imgTwo}
          imgThreeSrc={imgThree}
          CurrentIndex={currentIndex}
        />
      </div>
    </div>
  );
}

export default BusinessContent;
