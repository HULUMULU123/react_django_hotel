import React from "react";
import { FaWifi } from "react-icons/fa";
import styled, { css } from "styled-components";
import { PiToiletLight } from "react-icons/pi";
import { LuParkingCircle } from "react-icons/lu";
import { CiForkAndKnife } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
const StyledAdvantagesList = styled.ul`
  display: flex;

  gap: 0.2rem;
  margin: auto 0 0 1rem;

  ${(props) =>
    props.type === "modal"
      ? css`
          margin: 0;
        `
      : ""}
`;
const StyledAdvantagesItem = styled.li`
  background-color: var(--color-grey-200);
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  display: flex;

  align-items: center;
  gap: 0.5rem;
  color: var(--color-grey-500);
  & span {
    font-size: 0.9rem;
  }
`;
function RoomsAdvantages({ base, premium, type }) {
  return (
    <StyledAdvantagesList type={type}>
      {base && (
        <>
          <StyledAdvantagesItem>
            <span>Wi-fi</span>
            <FaWifi />
          </StyledAdvantagesItem>
          <StyledAdvantagesItem>
            <span>Toilet</span>
            <PiToiletLight />
          </StyledAdvantagesItem>
          <StyledAdvantagesItem>
            <span>Kitchen</span>
            <CiForkAndKnife />
          </StyledAdvantagesItem>
          <StyledAdvantagesItem>
            <span>Free Parking</span>
            <LuParkingCircle />
          </StyledAdvantagesItem>
          {premium && (
            <StyledAdvantagesItem>
              <span>Large Bed</span>
              <IoBedOutline />
            </StyledAdvantagesItem>
          )}
        </>
      )}
    </StyledAdvantagesList>
  );
}

export default RoomsAdvantages;
