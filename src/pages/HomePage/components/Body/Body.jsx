import React from "react";
import "./body.css";
import PortfolioIcon from "../../../../assets/svg/homepage/Portfolio";
import SecureIcon from "../../../../assets/svg/homepage/Secure";
import LockIcon from "../../../../assets/svg/homepage/Lock";
import HomeIcon from "../../../../assets/svg/homepage/Home";
//import SaveButton from "../../../../components/buttons/saveButton";
import Handyman from "../../../../assets/images/handyman.jpeg";
//import SimpleSlider from "../carousel/carousel"
const Body = () => {
  return (
<div className="body-container">
  <div className="why-propown-section">
        <div className="why-propown-heading">Why PropOwn ?</div>
        <div className="why-propown">
          <div className="why-propown-card">
            <div>
              <HomeIcon/>
            </div>
            <div className="why-propown-label">
              Invest in Your Dream Property
            </div>
            <div>
              Invest in your dream property with money, crypto or even service.
            </div>
          </div>
          <div className="why-propown-card">
            <div>
              <SecureIcon />
            </div>
            <div className="why-propown-label">100% Secure Payment</div>
            <div>
              We provide secure and encrypted payment options to ensure
              protected financial transactions.
            </div>
          </div>
          <div className="why-propown-card">
            <div>
              <LockIcon />
            </div>
            <div className="why-propown-label">
              {" "}
              Transparency and Traceability
            </div>
            <div>
              Track risks associated with different properties thanks to our
              risk assessment tool.
            </div>
          </div>
          <div className="why-propown-card">
            <div>
              <PortfolioIcon />
            </div>
            <div className="why-propown-label"> Diversified Portfolio</div>
            <div>
              Build a diversified real estate portfolio to minimize risk and
              maximize your earnings potential.
            </div>
          </div>
        </div>
      </div>

      <div className="invest-with-service-section">
        <div className="invest-image-div">
          <img src={Handyman} id="invest-image"></img>
        </div>
        <div className="invest-text">
          <span id="invest-title">Invest with Service</span>
          <p id="invest-paragraph">
            Don't have the funds to invest in real estate?  No problem! We offer
            a unique opportunity for you to invest in properties using your
            skills and services. Join our community of service investors and
            start building your investment portfolio today!
          </p>
      </div>
      </div>
      </div>
);
}
export default Body;