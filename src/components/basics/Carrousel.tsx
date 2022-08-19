import React, { useEffect, useState } from "react";

type Props = {
  imgOneSrc: string;
  imgTwoSrc: string;
  imgThreeSrc: string;
};

function Carrousel({ imgOneSrc, imgThreeSrc, imgTwoSrc }: Props) {
  const [CurrentIndex, setCurrentIndex] = useState(1);
  useEffect(() => {
    // this will loop every 5 seconds
    const interval = setInterval(() => {
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
    <div className="portrait">
      <div className="portrait" id="portraitInd">
        <img
          src={imgOneSrc}
          alt="individual"
          className="individualPortrait active"
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
