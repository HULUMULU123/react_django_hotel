import styled, { css } from "styled-components";
import React from "react";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  guests: css`
    color: var(--color-grey-700);
    background-color: transparent;
    border: 2px solid var(--color-brand-500);
    padding: 3px 3px;
    border-radius: 20px;
    &:hover {
      background-color: var(--color-brand-200);
    }
  `,
  search: css`
    color: var(--color-grey-0);
    border: 2px solid var(--color-brand-700);
    background-color: var(--color-brand-700);
    border-radius: 10px;

    & svg {
      width: 2.4rem !important;
      height: 2.4rem !important;
      color: var(--color-grey-0);
      transition: all 0.3s;
    }
    &:focus {
      outline: 2px solid var(--color-brand-900);
    }
  `,
};
const StyledButton = styled.button`
  ${(props) => variations[props.variation]}
  ${(props) => sizes[props.size]}
  ${(props) =>
    props.width === "small"
      ? css`
          width: 10rem;
        `
      : ""}
`;

function Button({ variation, size, type, onClick, children, width }) {
  return (
    <StyledButton
      variation={variation}
      type={type}
      onClick={onClick}
      size={size}
      width={width}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
