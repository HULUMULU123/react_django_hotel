import React, { lazy } from "react";

import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import SideBar from "./Sidebar";
import styled from "styled-components";

const Header = lazy(() => import("./Header"));
const SideBar = lazy(() => import("./Sidebar"));
const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  @media screen and (max-width: 1060px) {
    grid-template-columns: 18rem 1fr;
  }
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: 100px 100px auto; */

    grid-template-areas:
      "a a a a a a a a"
      "c c c c c c c c"
      "c c c c c c c c"
      "d d d d d d d d";
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  @media screen and (max-width: 900px) {
    grid-area: c;
  }
`;
const Container = styled.div`
  max-width: 130rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  const MemoSideBar = React.memo(SideBar);
  // const MemoHeader = React.memo(Header)

  return (
    <StyledAppLayout>
      <Header />
      <MemoSideBar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
