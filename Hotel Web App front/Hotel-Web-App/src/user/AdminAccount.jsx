import React from "react";
import { StyledAccountItem } from "./Account";
import { useUser } from "../context/UserContext";
function AdminAccount() {
  const { userInfo, setUserInfo } = useUser();

  return (
    <>
      {userInfo.isAdmin ? (
        <StyledAccountItem to="./allbookings">All bookings</StyledAccountItem>
      ) : (
        <p>Access deny</p>
      )}
    </>
  );
}

export default AdminAccount;
