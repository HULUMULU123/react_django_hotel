import React from "react";
import styled, { css } from "styled-components";

const sizes = {
  slider: css`
    background-color: green;
    width: 100%;
    height: 45rem;
    margin: 0 auto;
    flex-direction: column;
  `,
  small: css`
    height: 25rem;
    width: 48%;
    background-color: red;
    color: white;
    @media screen and (max-width: 900px) {
      width: 48%;
    }
    @media screen and (max-width: 700px) {
      width: 100%;
    }
  `,
};

const StyledContentCard = styled.div`
  display: flex;
  border-radius: 30px;
  margin-top: auto;
  background-image: linear-gradient(
      105deg,
      rgba(0, 0, 0, 0.65) 40%,
      rgba(153, 50, 246, 0.15) 60%,
      transparent 80%
    ),
    url(${(props) => props.imageUrl});

  ${(props) => sizes[props.size]}
  background-size: cover;

  & img {
    border-radius: 30px;
    overflow: hidden;
  }
  @media screen and (max-width: 900px) {
  }
`;

export const StyledParagraphCard = styled.div`
  margin-top: 1rem;
  color: #fff;

  font-size: 1.7rem;
  width: 50rem;
  ${(props) =>
    props.type === "mini"
      ? css`
          margin-top: 0.5rem;
          width: 100%;
          font-size: 1.1rem;
          @media screen and (max-width: 900px) {
            width: 20rem;
          }
        `
      : ""}
  ${(props) =>
    props.content === "slider"
      ? css`
          margin-bottom: 1rem;
          font-family: "Montserrat", sans-serif;
          font-weight: 100;
        `
      : ""}
`;
export const StyledText = styled.div`
  margin: auto 0;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 10px;
  /* background-color: rgba(0, 0, 0, 0.4); */
  width: 60%;
  height: 85%
    ${(props) =>
      props.type === "mini"
        ? css`
            padding: 1.2rem;
            @media screen and (max-width: 900px) {
              padding: 1rem;
            }
          `
        : ""};
`;
export default StyledContentCard;
