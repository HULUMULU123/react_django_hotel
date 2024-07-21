import React from "react";
import styled, { css } from "styled-components";
import {
  StyledBottomDiv,
  StyledLink,
  StyledPrice,
  StyledRoomsPrice,
} from "../rooms/RoomCard";
import Discount from "../../ui/Discount";

const StyledButton = styled.button`
  color: var(--color-brand-50);
  background-color: var(--color-brand-600);
  position: relative;
  top: -20px;
  width: 120px;
  text-align: center;
  margin-left: auto;
  margin-right: 2rem;
  border-radius: 5px;
  border: none;
  /* line-height: 2rem; */
  &:hover {
    background-color: var(--color-brand-700);
  }
`;
const StyledBookingItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
  border-radius: 10px;
  /* max-height: 15rem; */
`;

const StyledItemIformation = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledImg = styled.div`
  width: 25%;
  display: flex;
  max-height: 13.5rem;
  & > img {
    width: 90%;
    margin: 0 auto;
    border-radius: 5px;
  }
`;

const StyledItemHeading = styled.h3`
  color: var(--color-brand-700);
  margin: 0.4rem 0;
  font-size: 2.5rem;
`;

const StyledItemDescription = styled.p`
  /* background-color: var(--color-grey-50); */
  font-size: 1.4rem;
  color: var(-color-grey-200);
  margin: 0.5rem 0;
  border-radius: 5px;
`;

const StyledButtonLink = styled.button`
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
function BookingItem({ room, setNextStep, setBookingRoomId }) {
  function handleBooking() {
    setNextStep(true);
    setBookingRoomId(room);
  }

  const baseImgUrl = "http://127.0.0.1:8000/";
  return (
    <StyledBookingItem>
      <StyledImg>
        <img src={`${baseImgUrl}${room.image_1}`} />
      </StyledImg>
      <StyledItemIformation>
        <StyledItemHeading>{room.name}</StyledItemHeading>
        <StyledItemDescription>{room.short_descriptio}</StyledItemDescription>
        <StyledBottomDiv>
          <StyledRoomsPrice>
            {!room.discount ? (
              <StyledPrice type="roomInfo">
                {room.price.toLocaleString("ru-RU")}₽
              </StyledPrice>
            ) : (
              <Discount
                type="roomInfo"
                price={room.price.toLocaleString("ru-RU")}
                discount={(
                  (room.price * (100 - room.discount)) /
                  100
                ).toLocaleString("ru-RU")}
              />
            )}
          </StyledRoomsPrice>
          <StyledButtonLink onClick={handleBooking} type="roomInfo">
            Забронировать
          </StyledButtonLink>
        </StyledBottomDiv>
        {/* <StyledLink to={`${room.id}/`}>Забронировать</StyledLink> */}
      </StyledItemIformation>
    </StyledBookingItem>
  );
}

export default BookingItem;
