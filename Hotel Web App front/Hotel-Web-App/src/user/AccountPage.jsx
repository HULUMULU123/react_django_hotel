import React, { lazy } from "react";
import styled from "styled-components";
import { useMyAccount } from "./useMyAccount";
import Spinner from "../ui/Spinner";
import { useUser } from "../context/UserContext";
// import UserStats from "../features/dashboard/UserStats";
// import MyBookings from "./MyBookings";

const UserStats = lazy(() => import("../features/dashboard/UserStats"));
const MyBookings = lazy(() => import("./MyBookings"));
const StyledAccountIformation = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-300);
  border-radius: 7px;
  grid-column: 1;
`;

const StyledAccountList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 0.5rem;
`;

const StyledAccountItem = styled.li`
  width: 80%;
  text-align: center;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  background-color: transparent;
  color: var(--color-red-500);
  font-weight: 600;
  font-size: 1.8rem;
  border-radius: 5px;
  &:hover {
    color: var(--color-red-700);
    background-color: var(--color-grey-100);
  }
`;

const StyledParagraph = styled.p`
  font-size: 1.8rem;
`;
const StyledSpan = styled.span`
  text-transform: uppercase;
`;

const StyledMainDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  grid-column: 1;
`;
const StyledMyBookings = styled.div`
  grid-column: 1/5;
`;
function AccountPage() {
  const { userInfo, setUserInfo } = useUser();
  const { isLoading, account } = useMyAccount(userInfo.email);
  function handleLogOut() {
    window.location.href = "/about";
    localStorage.removeItem("userInfo");
  }

  if (isLoading) return <Spinner />;
  return (
    <StyledMainDiv>
      <StyledAccountIformation>
        {account.map((info) => (
          <StyledAccountList key={info.id}>
            <StyledAccountItem>
              <StyledParagraph>
                Hello, <StyledSpan>{info.first_name}</StyledSpan>!
              </StyledParagraph>
            </StyledAccountItem>
            <StyledAccountItem>
              {/* <StyledParagraph>Your bonuses: {info.bonuses}</StyledParagraph> */}
              <StyledParagraph>
                Here is your account information!
              </StyledParagraph>
            </StyledAccountItem>
            <StyledAccountItem>
              <StyledButton onClick={handleLogOut}>Log out</StyledButton>
            </StyledAccountItem>
          </StyledAccountList>
        ))}
      </StyledAccountIformation>

      <UserStats />
      <StyledMyBookings>
        <MyBookings />
      </StyledMyBookings>
    </StyledMainDiv>
  );
}

export default AccountPage;
