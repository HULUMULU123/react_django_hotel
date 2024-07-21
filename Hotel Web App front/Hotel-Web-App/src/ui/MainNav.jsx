import styled from "styled-components";
import React, { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineHome } from "react-icons/hi";
import {
  HiOutlineCalendarDays,
  HiOutlineHomeModern,
  HiOutlineMapPin,
} from "react-icons/hi2";
import { PiInfo } from "react-icons/pi";
import { MdOutlineHotel } from "react-icons/md";
import { useTranslation } from "react-i18next";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  @media screen and (max-width: 900px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 3.4rem;
    transition: all 0.3s;
  }
  @media screen and (max-width: 900px) {
    & span {
      display: none;
    }
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const { t, i18n } = useTranslation();

  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="about">
            <HiOutlineHome />

            <span>{t("sidebar.home")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="booking">
            <HiOutlineCalendarDays />
            <span>{t("sidebar.booking")}</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="rooms">
            <MdOutlineHotel />
            <span>{t("sidebar.rooms")}</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="contacts">
            <PiInfo />
            <span>{t("sidebar.contacts")}</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
