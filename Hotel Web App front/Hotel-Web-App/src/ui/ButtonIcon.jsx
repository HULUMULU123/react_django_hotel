import styled, { css } from "styled-components";

const ButtonIcon = styled.button`
  display: flex;

  align-items: baseline;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }

  ${(props) =>
    props.type === "account"
      ? css`
          padding: 0.8rem 1.2rem;
          background: var(--color-brand-700);
          &:hover {
            background-color: var(--color-brand-200);

            & svg,
            p {
              color: var(--color-grey-700);
            }
          }
          & svg {
            color: var(--color-grey-0);
          }
        `
      : ""}
`;

export default ButtonIcon;
