import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./RoomsSlider.css";
function RoomsSlider({ base, room }) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={base + room.image_2} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb room-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={base + room.image_1} />
        </div>
        <div>
          <img src={base + room.image_2} />
        </div>
      </Slider>
    </div>
  );
}

export default RoomsSlider;
