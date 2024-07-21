import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button";
import Tag from "../../ui/Tag";
import { Flag } from "../../ui/Flag";
const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 9rem 2rem 1fr 7rem 9rem;
  gap: 1.2rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;

const StyledButton = styled.button`
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  border: 1px solid var(--color-brand-800);
  border-radius: 7px;
  text-transform: lowercase;
  &:hover {
    background-color: var(--color-brand-700);
    border: 1px solid var(--color-brand-900);
  }
  &:active {
    transform: scale(0.95);
  }
`;
function TodayItem() {
  const status = "unconfirmed";
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag alt={`Flag of 🚩`} />
      <Guest>Stas Rudenko</Guest>
      <div>13 nughts</div>
      <StyledButton>Check in</StyledButton>
    </StyledTodayItem>
  );
}

export default TodayItem;
