import React from "react";
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
          imgOneSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          imgTwoSrc="https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          imgThreeSrc="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          CurrentIndex={currentIndex}
        />
      </div>
    </div>
  );
}

export default BusinessContent;
