import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import AboutUsContentCard, {
  StyledParagraphCard,
  StyledText,
} from "./AboutUsContentCard";
import Heading from "../../ui/Heading";
import axios from "axios";
import { StyledLink } from "./AboutUsContent";
// import about from "./about";

export default function SimpleSlider() {
  const [about, setAbout] = useState([]);
  const baseImgUrl = "http://127.0.0.1:8000/";
  useEffect(() => {
    async function fetchAbout() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/about");
      setAbout(data);
    }

    fetchAbout();
  }, []);
  console.log(about);
  var settings = {
    dots: true,

    infinite: true,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 7000,
    autoplay: false,
    cssEase: "ease",
    arrows: false,
  };
  return (
    <Slider {...settings}>
      {about.map((el) => (
        <div key={el.heading}>
          <AboutUsContentCard size="slider" imageUrl={baseImgUrl + el.image}>
            <StyledText>
              <StyledParagraphCard content="slider">
                {el.description}
              </StyledParagraphCard>
              <Heading as="h1" color="white" element="slider">
                {el.heading}
              </Heading>
              <StyledLink to="../booking" content="slider">
                Booking
              </StyledLink>
            </StyledText>
          </AboutUsContentCard>
        </div>
      ))}
    </Slider>
  );
}
