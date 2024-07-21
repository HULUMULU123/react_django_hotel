import moment from "moment";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { GrLanguage } from "react-icons/gr";
import styled, { css } from "styled-components";
import ButtonIcon from "./ButtonIcon";
import { StyledInformation } from "./HeaderMenu";

const StyledLocal = styled.div`
  font-size: 1rem;

  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;
  & svg {
    width: 2rem;
    height: 2rem;
    transition: color 0.5s;
    color: ${(props) =>
      props.active ? css`var(--color-brand-700)` : css`var(--color-grey-700)`};
  }
  & button {
    margin-right: 0.2rem;
    border: none;
    background-color: transparent;
  }

  color: ${(props) =>
    props.active ? css`var(--color-brand-500)` : css`var(--color-grey-500)`};
`;

const StyledShowLocal = styled.div`
  position: absolute;
  top: 5rem;
  z-index: 100;
  width: 10rem;
  background-color: var(--color-grey-0);
  border-radius: 10px;
  padding: 2rem 1rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
  & ul {
    display: flex;
    flex-direction: column;
    & li {
      display: flex;
      flex-direction: column;
    }
  }
  & button {
    background-color: transparent;
    border: none;
  }
`;

const StyledLi = styled.li`
  border-radius: 5px;

  background: ${(props) =>
    props.language === props.lan ? css`var(--color-grey-100)` : ""};
  color: ${(props) =>
    props.language === props.lan
      ? css`var(--color-grey-800)`
      : css`var(--color-grey-500)`};
`;

function Localization() {
  const [showLocal, setShowLocal] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    moment.locale(lng);
    setShowLocal(!showLocal);
  };

  function handleLocal() {
    setShowLocal(!showLocal);
  }
  return (
    <>
      <ButtonIcon onClick={handleLocal} active={showLocal}>
        <StyledInformation type="locale">
          {t("description.part1")}
        </StyledInformation>
        <GrLanguage />
      </ButtonIcon>
      {showLocal && (
        <StyledShowLocal>
          <ul>
            <StyledLi language="ru" lan={i18n.language}>
              <button type="button" onClick={() => changeLanguage("ru")}>
                Русский
              </button>
            </StyledLi>
            <StyledLi language="en" lan={i18n.language}>
              <button type="button" onClick={() => changeLanguage("en")}>
                English
              </button>
            </StyledLi>
          </ul>
        </StyledShowLocal>
      )}
    </>
  );
}

export default Localization;
