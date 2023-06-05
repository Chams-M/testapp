import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import CarouselCard from "./carouselCard";
import "../../../Dashboard/dashboard.css";

const cardData = [
  {
    id: 1,
    card: <CarouselCard />,
  },
  { id: 2, card: <CarouselCard /> },
  { id: 3, card: <CarouselCard /> },
  { id: 4, card: <CarouselCard /> },
  { id: 5, card: <CarouselCard /> },
  {
    id: 6,
    card: <CarouselCard />,
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#9E7889" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, background: "#9E7889", color: "rgba(58, 67, 75, 1)" }}
      onClick={onClick}
    />
  );
}

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="list-container">
        <div className="list-label">Favorites List</div>
        <br></br>
        <Slider {...settings}>
          {cardData.map((card) => {
            return <div key={card.id}>{card.card}</div>;
          })}
        </Slider>
      </div>
    );
  }
}
