import React from "react";
import Carrousel from "./Carrousel";
type Props = {
  currentIndex: number;
};
function IndividualsContent({ currentIndex }: Props) {
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
          imgOneSrc="https://images.unsplash.com/photo-1591980896142-4e36328411ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          imgTwoSrc="https://images.unsplash.com/photo-1657664073337-31394d7e5c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
          imgThreeSrc="https://images.unsplash.com/photo-1620736214024-ea9e09befe3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          CurrentIndex={currentIndex}
        />
      </div>
    </div>
  );
}

export default IndividualsContent;
