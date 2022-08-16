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
          <div className="portrait"></div>
        </div>
      </div>
    </div>
  );
}

export default ForIndividuals;
