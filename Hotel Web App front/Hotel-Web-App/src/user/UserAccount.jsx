import React from "react";
import { StyledAccountItem } from "./Account";
function UserAccount() {
  return (
    <>
      <StyledAccountItem to="./cabinet">My acccount</StyledAccountItem>
      <StyledAccountItem to="./mybookings">My bookings</StyledAccountItem>
      <StyledAccountItem to="./settings">Settings</StyledAccountItem>
    </>
  );
}

export default UserAccount;
