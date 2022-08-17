import React from "react";

type Props = {};

function BusinessHeader({}: Props) {
  return (
    <div id="businessHeader">
      <div className="left">
        <img
          src="https://images.ctfassets.net/t1oaprbqkyo4/3vIrNOV5VCmhXApqkXHecf/bf3ed7a5b39312ae7f214a90f6026045/logo.svg"
          alt="lively logo"
        />
        <div id="rel">Brokers</div>
        <div>Employers</div>
        <div>Partner</div>
      </div>
      <div className="right">
        <div className="blog">Blog</div>
        <div>Resources</div>
        <div>About us</div>
        <div>HSA Guide</div>
        <button className="greenBtn">Contact Sales</button>
      </div>
    </div>
  );
}

export default BusinessHeader;
