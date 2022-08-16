import React from "react";

function ForIndividuals() {
  return (
    <div id="Individuals">
      <div id="individualsHeader">
        <div className="left">
          <img
            src="https://images.ctfassets.net/t1oaprbqkyo4/3vIrNOV5VCmhXApqkXHecf/bf3ed7a5b39312ae7f214a90f6026045/logo.svg"
            alt="lively logo"
          />
          <div>HSA Features</div>
          <div>Transfer Hsa</div>
          <div>Invest HSA</div>
          <div>Pricing</div>
        </div>
        <div className="right">
          <div>Blog</div>
          <div>Resources</div>
          <div>About us</div>
          <div>Log In</div>
          <button className="greenBtn">Open Account</button>
        </div>
      </div>
    </div>
  );
}

export default ForIndividuals;
