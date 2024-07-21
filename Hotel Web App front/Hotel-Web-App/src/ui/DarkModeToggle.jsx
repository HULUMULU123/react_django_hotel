import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";
import React from "react";
function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
