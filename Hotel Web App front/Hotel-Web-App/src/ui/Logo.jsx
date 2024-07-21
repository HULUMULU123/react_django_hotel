import styled, { css } from "styled-components";
import React from "react";
import { useDarkMode } from "../context/DarkModeContext";
const StyledLogo = styled.div`
  text-align: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  ${(props) =>
    props.darkmode === "dark"
      ? css`
          filter: brightness(1.35);
        `
      : ""}
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      <Img
        src="/logo-light.png"
        alt="Logo"
        loading="lazy"
        darkmode={isDarkMode ? "dark" : ""}
      />
    </StyledLogo>
  );
}

export default Logo;
