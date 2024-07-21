import React from "react";
import Heading from "../../ui/Heading";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
`;

const StyledGuestInput = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: 7px;
  font-size: 1.7rem;
  padding: 0.5rem 1rem;

  &:focus {
    outline: 1px solid var(--color-brand-700);
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
  }

  &:focus:invalid {
    outline: 1px solid var(--color-red-700);
  }
  &::-webkit-input-placeholder {
    color: var(--color-grey-300);
  }
  &:placeholder-shown + .label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

const StyledLabel = styled.label`
  padding: 0;
  margin: 0 1rem;
  transition: all 0.2s;
  text-align: left;
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 70%;
`;
function GuestField({ num }) {
  return (
    <StyledWrapper>
      <Heading as="h3">Guest # {num}</Heading>
      <StyledForm>
        <StyledInputDiv>
          <StyledGuestInput placeholder="Surname" name="surname" />
          <StyledLabel htmlFor="surname" className="label">
            Surname
          </StyledLabel>
        </StyledInputDiv>
        <StyledInputDiv>
          <StyledGuestInput placeholder="Name" name="name" />
          <StyledLabel htmlFor="name" className="label">
            Name
          </StyledLabel>
        </StyledInputDiv>
      </StyledForm>
    </StyledWrapper>
  );
}

export default GuestField;
