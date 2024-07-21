import React, { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

const UserContext = createContext();

function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useLocalStorageState([], "userInfo");
  const [toggle, setToggle] = useState(true);
  useEffect(
    function () {
      console.log(userInfo);
    },
    [userInfo]
  );

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of DarkModeProvider");
  return context;
}

export { UserProvider, UserContext, useUser };
