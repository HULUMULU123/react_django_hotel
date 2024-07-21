import React from "react";
import { TbBuildingMonument } from "react-icons/tb";
import { GiParkBench, GiShoppingBag, GiSportMedal } from "react-icons/gi";
import styled, { css } from "styled-components";

export const StyledDivMonument = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem;
`;
const StyledList = styled.ul`
  display: flex;
  gap: 0.2rem;
`;
const StyledItem = styled.li`
  font-size: 1rem;
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

export const StyledParagraphMonument = styled.p`
  font-size: 1.6rem;
  font-weight: 600;

  ${(props) =>
    props.type === "light"
      ? css`
          font-weight: 500;
          font-size: 1.3rem;
        `
      : ""}
`;
function Monuments() {
  return (
    <StyledDivMonument>
      <StyledParagraphMonument>Поблизости:</StyledParagraphMonument>
      <StyledList>
        <StyledItem>
          <TbBuildingMonument />
          Площадь ленина
        </StyledItem>
        <StyledItem>
          <GiShoppingBag />
          Множество магазинов
        </StyledItem>
        <StyledItem>
          <GiSportMedal />
          Спортивные площадки
        </StyledItem>
        <StyledItem>
          <GiParkBench />
          Места отдыха
        </StyledItem>
      </StyledList>
    </StyledDivMonument>
  );
}

export default Monuments;
