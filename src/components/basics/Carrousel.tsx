import React, { useEffect, useState } from "react";

type Props = {
  imgOneSrc: string;
  imgTwoSrc: string;
  imgThreeSrc: string;
  CurrentIndex: number;
};

function Carrousel({ CurrentIndex, imgOneSrc, imgThreeSrc, imgTwoSrc }: Props) {
  //Update current Image to display
  useEffect(() => {
    const container = document.querySelector("#portraitInd") as HTMLDivElement;
    const childNodes = container.childNodes;
    // remove all 'active' classes
    childNodes.forEach((elem) => {
      const target = elem as HTMLImageElement;
      target.classList.remove("active");
    });
    // add 'active' class to current element
    const target = childNodes[CurrentIndex] as HTMLImageElement;
    target.classList.add("active");
  }, [CurrentIndex]);
  return (
    <div className="portrait">
      <div className="portrait" id="portraitInd">
        <img
          src={imgOneSrc}
          alt="individual"
          className="individualPortrait"
          id="indOne"
        />
        <img
          src={imgTwoSrc}
          alt="individual"
          className="individualPortrait"
          id="indTwo"
        />
        <img
          src={imgThreeSrc}
          alt="individual"
          className="individualPortrait"
          id="indThree"
        />
      </div>
    </div>
  );
}

export default Carrousel;
