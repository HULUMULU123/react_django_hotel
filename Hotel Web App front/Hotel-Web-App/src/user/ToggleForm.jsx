import React from "react";
import styled, { css } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledToggleButton = styled.button`
  border: none;
  background-color: transparent;
  width: 50%;
  text-align: center;
  ${(params) =>
    params.param === true
      ? css`
          color: var(--color-grey-0);
          background-color: var(--color-brand-500);
        `
      : ""}
`;
function ToggleForm({ text, param, onClick }) {
  return (
    <StyledToggleButton type="button" param={param} onClick={onClick}>
      {text}
    </StyledToggleButton>
  );
}

export default ToggleForm;
