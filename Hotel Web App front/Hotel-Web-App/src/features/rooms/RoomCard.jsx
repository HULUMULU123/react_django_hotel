import React from "react";
import styled, { css } from "styled-components";
import Slider from "react-slick";
import Heading from "../../ui/Heading";
import RoomsAdvantages from "../../ui/RoomsAdvantages";
import Discount from "../../ui/Discount";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import InfoRoom from "./InfoRoom";
const StyledRoomsCard = styled.div`
  will-change: transform;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  height: 380px;
  flex-basis: 30%;
  overflow: hidden;
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
  transition: transform 0.3s;
  -webkit-backface-visibility: hidden; /* Chrome, Safari, Opera */
  backface-visibility: hidden;
  & .img {
    width: 100%;
    height: 150px;
  }
  &:hover {
    transform: scale(1.02);
  }
`;

export const StyledLink = styled(Link)`
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  /* position: relative;
  top: -20px; */
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;

  border-radius: 5px;
  border: none;
  /* line-height: 2rem; */
  &:hover {
    background-color: var(--color-brand-700);
  }
  ${(props) =>
    props.type === "modal"
      ? css`
          margin-top: auto;
          margin-left: auto;
          position: static;
          width: 150px;
        `
      : ""}

  ${(props) =>
    props.type === "roomInfo"
      ? css`
          padding: 2rem;
          font-size: 2rem;
        `
      : ""}
`;

const StyledHeading = styled(Heading)`
  margin: 2rem 0 1rem 1rem;
  font-size: 25px;
  text-transform: capitalize;
`;

const StyledShortDescription = styled.p`
  font-size: 1.1rem;
  margin: 0rem 1rem 1rem 1rem;
  line-height: 1.3rem;
  color: var(--color-grey-500);
`;

export const StyledRoomsPrice = styled.div`
  display: flex;
  gap: 1rem;
  /* margin-top: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 1rem; */
`;

export const StyledPrice = styled.p`
  color: var(--color-brand-600);
  font-size: 2.6rem;
  font-weight: 500;
`;

export const StyledBottomDiv = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
`;
function RoomCard({ baseImg, room }) {
  var settings = {
    dots: true,
    infinite: true,

    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,

    cssEase: "ease",
  };
  return (
    <StyledRoomsCard>
      <Slider {...settings}>
        <div>
          <img className="img" src={baseImg + room.image_1} loading="lazy" />
        </div>
        <div>
          <img className="img" src={baseImg + room.image_2} loading="lazy" />
        </div>
      </Slider>
      <StyledHeading as="h3">{room.name}</StyledHeading>
      <StyledShortDescription>{room.short_descriptio}</StyledShortDescription>
      <RoomsAdvantages base={room.base_advatages} premium={room.large_bed} />
      <StyledBottomDiv>
        <StyledRoomsPrice>
          {!room.discount ? (
            <StyledPrice>{room.price.toLocaleString("ru-RU")}₽</StyledPrice>
          ) : (
            <Discount
              price={room.price.toLocaleString("ru-RU")}
              discount={(
                (room.price * (100 - room.discount)) /
                100
              ).toLocaleString("ru-RU")}
            />
          )}
        </StyledRoomsPrice>
        <StyledLink to={`${room.id}/`}>Подробнее</StyledLink>
      </StyledBottomDiv>
    </StyledRoomsCard>
  );
}

export default RoomCard;
