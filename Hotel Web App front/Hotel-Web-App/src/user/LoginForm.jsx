import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { Link, redirect } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../ui/Spinner";

const LoginLayout = styled.div``;

const StyledFormDiv = styled.form`
  width: 80%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StyledInputField = styled.input`
  border: 1px solid var(--color-grey-300);
  border-radius: 7px;
  font-size: 1.7rem;
  padding: 0.5rem 1rem;

  &:focus {
    outline: 1px solid var(--color-brand-700);
    box-shadow: 0 1rem 2rem rgba(black, 0.1);
  }

  &:focus:invalid {
    outline: 1px solid var(--color-red-700);
  }
  &::-webkit-input-placeholder {
    color: var(--color-grey-300);
  }
  &:placeholder-shown + .label {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4rem);
  }
`;

export const StyledLabel = styled.label`
  padding: 0;
  margin: 0 1rem;
  transition: all 0.2s;
  text-align: left;
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  font-size: 1.8rem;
  padding: 0.8rem 0;
`;
function LoginForm() {
  const { control, register, handleSubmit } = useForm();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userInformation, setUserInformation] = useState(null);
  const [value, setValue] = useLocalStorageState([], "userInfo");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit(e) {
    // setEmail(e.email);
    // setPassword(e.password);
    // console.log(e.email);
    // axios
    //   .post("http://127.0.0.1:8000/api/users/login/", {
    //     username: email,
    //     password: password,
    //   })
    //   .then((res) => localStorage.setItem("userInfo", JSON.stringify(res.data)))
    //   .catch((err) => console.log(err));
    async function userLogin() {
      setIsLoading(true);
      // const config = {
      //   headers: {
      //     "Content-type": "apploccation/json",
      //   },
      // };
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/users/login/",
          {
            username: e.email,
            password: e.password,
          }
        );

        setValue(data);
        setError(null);
        setIsLoading(false);
        window.location.href = "/about";
      } catch {
        setError("Something went wrong, please try later");
        setIsLoading(false);
        toast.error("Something went wrong, please try later");
      }
      // localStorage.setItem("userInfo", JSON.stringify(data));
    }
    userLogin();
  }
  function onError() {}
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledFormDiv onSubmit={handleSubmit(onSubmit, onError)}>
          <StyledInputField
            name="email"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <StyledLabel htmlFor="email" className="label">
            Email
          </StyledLabel>
          <StyledInputField
            name="password"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          <StyledLabel htmlFor="password" className="label">
            Password
          </StyledLabel>

          <LoginButton type="submit">Sign in</LoginButton>
        </StyledFormDiv>
      )}
    </>
  );
}

export default LoginForm;
