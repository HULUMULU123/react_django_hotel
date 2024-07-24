import React, { useContext, useEffect, useState } from "react";
import styled, { css } from "styled-components";

import ButtonIcon from "./ButtonIcon";
import { HiOutlineUser } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Localization from "./Localization";
import { UserContext } from "../context/UserContext";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { IoLogInOutline } from "react-icons/io5";
const StyledHeaderMenu = styled.ul`
  display: flex;
  flex-direction: row-reverse;
  gap: 0.4rem;
`;

export const StyledInformation = styled.p`
  text-transform: uppercase;
  color: var(--color-grey-700);
  font-size: 1.2rem;
  margin-right: 0.5rem;
  ${(props) => (props.type === "locale" ? css`` : "")}
  ${(props) =>
    props.type === "account"
      ? css`
          color: var(--color-grey-0);
          align-self: center;
        `
      : ""}
`;
function HeaderMenu() {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);
  const { userInfo, setUserInfo } = useContext(UserContext);
  // const [value, setValue] = useLocalStorageState([], "userInfo");
  // const [username, setUsername] = useState(null);
  // useEffect(() => {
  //   const userInfoFromStorage = localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : [];
  //   if (userInfoFromStorage) {
  //     setUserData(userInfoFromStorage);
  //   }
  // }, [userInfo]);

  return (
    <StyledHeaderMenu>
      <li>
        {userInfo.username ? (
          <ButtonIcon onClick={() => navigate("/account")} type="account">
            <StyledInformation type="account">
              {userInfo.name}
            </StyledInformation>
            <HiOutlineUser />
          </ButtonIcon>
        ) : (
          <ButtonIcon onClick={() => navigate("../login")} type="account">
            <IoLogInOutline />
          </ButtonIcon>
          // <Link to="../login">
          //   <IoLogInOutline />
          // </Link>
        )}
      </li>

      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Localization />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
