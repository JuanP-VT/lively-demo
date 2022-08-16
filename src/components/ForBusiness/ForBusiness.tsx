import React from "react";

function ForBusiness() {
  return (
    <div id="Business">
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
      <div className="content">
        <div className="left">
          <p className="header">HSA administration for employers, simplified</p>
          <p className="p">
            Lively takes care of the heavy lifting so you can manage your health
            saving account program with ease
          </p>
          <button className="greenBtn"> Learn More</button>
        </div>
        <div className="right">
          <div className="portrait"></div>
        </div>
      </div>
    </div>
  );
}

export default ForBusiness;
