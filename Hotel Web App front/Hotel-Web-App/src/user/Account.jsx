import React from "react";
import AdminAccount from "./AdminAccount";
import styled from "styled-components";
import UserAccount from "./UserAccount";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";
import PageNotFound from "../pages/PageNotFound";

const StyledAccountList = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: var(--color-grey-0);
  padding: 2rem 0;
  border-radius: 10px;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
`;

export const StyledAccountItem = styled(NavLink)`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  width: 20rem;
  background-color: transparent;
  border-radius: 7px;
  color: var(--color-grey-600);
  &:hover,
  &:active,
  &.active {
    background-color: var(--color-grey-100);
    color: var(--color-grey-800);
  }
`;
function Account() {
  const { userInfo, setUserInfo } = useUser();
  if (userInfo.length === 0) return <PageNotFound />;

  return (
    <>
      <StyledAccountList>
        {userInfo.isAdmin ? <AdminAccount /> : ""}
        <UserAccount />
      </StyledAccountList>

      <Outlet />
    </>
  );
}

export default Account;
