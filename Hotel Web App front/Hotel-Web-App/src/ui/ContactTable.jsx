import React from "react";
import styled, { css } from "styled-components";

const StyledContactDiv = styled.div`
  display: flex;
  width: 40%;

  margin: 2rem auto;
  justify-content: space-around;
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
  background-color: var(--color-grey-0);
  padding: 2rem 0;
`;
const StyledContactList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  & span {
    width: 100%;
    height: 1px;
    background-color: var(--color-grey-400);
    &:last-child {
      display: none;
    }
  }
`;
const StyledContactItem = styled.li`
  font-size: 2rem;
  width: 100%;

  /* &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-300);
  } */
  ${(props) =>
    props.type === "link"
      ? css`
          color: var(--color-brand-700);
          font-weight: 600;
          letter-spacing: 0.2rem;
          cursor: pointer;
        `
      : ""}
`;
function ContactTable() {
  return (
    <StyledContactDiv>
      <StyledContactList>
        <StyledContactItem>Phone</StyledContactItem>
        <span></span>
        <StyledContactItem>Email</StyledContactItem>
        <span></span>
        <StyledContactItem>Address</StyledContactItem>
        <span></span>
      </StyledContactList>
      <StyledContactList>
        <StyledContactItem type="link">+7 (914) 999-99-99</StyledContactItem>
        <span></span>
        <StyledContactItem type="link">test@test.com</StyledContactItem>
        <span></span>
        <StyledContactItem type="link">ул. Пушкина д.1</StyledContactItem>
        <span></span>
      </StyledContactList>
    </StyledContactDiv>
  );
}

export default ContactTable;
