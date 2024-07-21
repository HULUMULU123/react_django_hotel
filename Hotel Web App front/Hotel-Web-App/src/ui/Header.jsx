import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import { HiLanguage } from "react-icons/hi2";
import styled from "styled-components";

import "moment/dist/locale/ru";
import Localization from "./Localization";
import HeaderMenu from "./HeaderMenu";
const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  @media screen and (max-width: 900px) {
    grid-area: a;
  }
`;
function Header() {
  const { t, i18n } = useTranslation();

  return (
    <StyledHeader>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
