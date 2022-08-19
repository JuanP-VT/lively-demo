import React from "react";
import IndividualsContent from "../../basics/IndividualsContent";
import IndividualsHeader from "../../basics/IndividualsHeader";
type Props = {
  currentIndex: number;
};
function ForIndividuals({ currentIndex }: Props) {
  return (
    <div id="Individuals">
      <IndividualsHeader />
      <IndividualsContent currentIndex={currentIndex} />
    </div>
  );
}

export default ForIndividuals;
