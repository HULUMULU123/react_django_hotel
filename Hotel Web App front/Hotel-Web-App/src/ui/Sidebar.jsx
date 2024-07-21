import React, { Suspense } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import { NavLink } from "react-router-dom";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);

  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media screen and (max-width: 900px) {
    grid-area: d;

    padding: 0;
    gap: 0;
    display: flex;
    width: 100%;
    margin: auto;
  }
`;
function SideBar() {
  return (
    <StyledSidebar>
      <NavLink replace to="about">
        <Logo />
      </NavLink>

      <MainNav />
    </StyledSidebar>
  );
}

export default SideBar;
