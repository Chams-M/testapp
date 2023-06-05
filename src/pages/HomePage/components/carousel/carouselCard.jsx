import React from "react";
import img from "../../../../assets/images/signup.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BathIcon from "../../../../assets/svg/carousel/Bath";
import BedIcon from "../../../../assets/svg/carousel/Bed";
import SqftIcon from "../../../../assets/svg/carousel/Sqft";

const CarouselCard = () => {
  return (
    <div className="carousel-card">
      <div className="carousel-card-img">
        <img src={img} id="my-svg"></img>
      </div>
      <div className="card-data">
        <div className="card-data-details">
          <div className="favorite-icon-div">
            <span id="property-item-title">Villa</span>
            <div>
              <FavoriteIcon
                sx={{ color: "#C44649", height: "30px", width: "30px" }}
              />
            </div>
          </div>
          <span id="property-item-price">$ 1,342,000 </span>
          <span id="property-item-location">Jamaica, New York 11494</span>
          <div className="property-specifities">
            <div className="property-specifities-item">
              <BedIcon />
              <span> 3 beds</span>
            </div>
            <div className="property-specifities-item">
              <BathIcon />
              <span> 1 baths</span>
            </div>
            <div className="property-specifities-item">
              <SqftIcon />
              <span> 2444 sqft</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarouselCard;
