import React from "react";
import styled from "styled-components";

const StyledBookingTable = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  width: 25rem;
  height: 20rem;
  box-shadow: 0 1px 8px var(--color-grey-200);
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
`;

const StyledBookingList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
`;

const StyledBookingItem = styled.li`
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-grey-600);
  & > span {
    color: var(--color-grey-800);
    font-weight: 600;
  }
`;

const StyledSpan = styled.span`
  background: var(--color-grey-500);
  margin: 0 auto;
  width: 90%;
  height: 0.5px;
`;

const StyledHeading = styled.h3`
  color: var(--color-brand-700);
  text-transform: uppercase;
  margin: 1.5rem 2rem;
  font-size: 2.2rem;
  text-align: center;
`;
function BookingInfo({ startDate, endDate, guests }) {
  return (
    <StyledBookingTable>
      <StyledHeading>booking info</StyledHeading>
      <StyledBookingList>
        <StyledBookingItem>
          Start date: <span>{`${startDate}`}</span>
        </StyledBookingItem>
        <StyledSpan></StyledSpan>
        <StyledBookingItem>
          End date: <span>{`${endDate}`}</span>
        </StyledBookingItem>
        <StyledSpan></StyledSpan>
        <StyledBookingItem>
          Guests: <span>{`${guests}`}</span>
        </StyledBookingItem>
      </StyledBookingList>
    </StyledBookingTable>
  );
}

export default BookingInfo;
