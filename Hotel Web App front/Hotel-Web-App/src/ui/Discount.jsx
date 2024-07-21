import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  ${(props) =>
    props.type === "roomInfo"
      ? css`
          width: 13rem;
        `
      : ""};
`;
const StyledPrice = styled.p`
  text-decoration: line-through;
  color: var(--color-grey-500);
  font-size: 1.3rem;

  ${(props) =>
    props.type === "roomInfo"
      ? css`
          font-size: 1.5rem;
        `
      : ""}
`;
const StyledDiscount = styled.p`
  color: var(--color-brand-600);
  font-size: 2rem;
  ${(props) =>
    props.type === "roomInfo"
      ? css`
          font-size: 2.6rem;
        `
      : ""}
`;
function Discount({ price, discount, type }) {
  return (
    <StyledDiv type={type}>
      <StyledDiscount type={type}>{discount}₽</StyledDiscount>
      <StyledPrice type={type}>{price}₽</StyledPrice>
    </StyledDiv>
  );
}

export default Discount;
