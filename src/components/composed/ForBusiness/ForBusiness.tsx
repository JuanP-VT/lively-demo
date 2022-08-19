import React from "react";
import BusinessContent from "../../basics/BusinessContent";
import BusinessHeader from "../../basics/BusinessHeader";

type Props = {
  currentIndex: number;
};
function ForBusiness({ currentIndex }: Props) {
  return (
    <div id="Business">
      <BusinessHeader />
      <BusinessContent currentIndex={currentIndex} />
    </div>
  );
}

export default ForBusiness;
