import React, { useState } from "react";
import { useEffect } from "react";
import imgOne from "../../img/individual.avif";
import imgTwo from "../../img/individualOne.avif";
import imgThree from "../../img/individualTwo.avif";

function IndividualsContent() {
  // This state will keep track of the current index
  // in the image slider
  const [CurrentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    // this will loop every 5 seconds
    const interval = setInterval(() => {
      console.log(CurrentIndex);
      const container = document.querySelector(
        "#portraitInd"
      ) as HTMLDivElement;
      const childNodes = container.childNodes;
      // remove all active class
      childNodes.forEach((elem) => {
        const target = elem as HTMLImageElement;
        target.classList.remove("active");
      });
      // add active to current index
      const target = childNodes[CurrentIndex] as HTMLImageElement;
      target.classList.add("active");
      if (CurrentIndex >= 2) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex((CurrentIndex) => CurrentIndex + 1);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [CurrentIndex]);
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
        <div className="portrait" id="portraitInd">
          <img
            src={imgOne}
            alt="individual"
            className="individualPortrait active"
            id="indOne"
          />
          <img
            src={imgTwo}
            alt="individual"
            className="individualPortrait"
            id="indTwo"
          />
          <img
            src={imgThree}
            alt="individual"
            className="individualPortrait"
            id="indThree"
          />
        </div>
      </div>
    </div>
  );
}

export default IndividualsContent;
