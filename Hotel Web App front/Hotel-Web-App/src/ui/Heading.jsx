import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
      font-weight: 600;
    `}
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    ${(props) =>
    props.color === "white" &&
    css`
      color: white;
    `}
    ${(props) =>
    props.position === "center" &&
    css`
      text-align: center;
    `}
    ${(props) =>
    props.margin === "8rem"
      ? css`
          margin-left: 8rem;
        `
      : ""}
    
    ${(props) =>
    props.element === "slider"
      ? css`
          font-family: "Montserrat", sans-serif;
          font-weight: 700;
          font-size: 9.75rem;
          text-transform: uppercase;
          line-height: 1.05 !important;
        `
      : ""}
  line-height:1.4
`;
export default Heading;
