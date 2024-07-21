import React, { useContext, useState } from "react";
import styled from "styled-components";
import ToggleForm from "../user/ToggleForm";
import LoginForm from "../user/LoginForm";
import RegisterForm from "../user/RegisterForm";
import Heading from "../ui/Heading";
const StyledUserFormDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  padding: 4rem;
  width: 500px;
  text-align: center;

  background-color: var(--color-grey-0);
  border-radius: 5px;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 20px var(--color-grey-100);
`;

const StyledUserToggleDiv = styled.div`
  height: 3rem;
  width: 25rem;
  margin: 0rem auto;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--color-grey-200);
`;
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const LoginHeading = styled.h2`
  font-size: 4rem;
  margin-bottom: 2rem;
`;
function UserFrom() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  function handleLogin() {
    setIsLogin(true);
    setIsRegister(false);
  }
  function handleRegister() {
    setIsLogin(false);
    setIsRegister(true);
  }
  return (
    <LoginLayout>
      <StyledUserFormDiv>
        <LoginHeading as="h2">
          {isLogin ? "Log in now!" : "Register now!"}
        </LoginHeading>
        <StyledUserToggleDiv>
          <ToggleForm text={"Login"} param={isLogin} onClick={handleLogin} />
          <ToggleForm
            text={"Register"}
            param={isRegister}
            onClick={handleRegister}
          />
        </StyledUserToggleDiv>
        {isLogin ? <LoginForm /> : <RegisterForm handleLogin={handleLogin} />}
      </StyledUserFormDiv>
    </LoginLayout>
  );
}

export default UserFrom;
