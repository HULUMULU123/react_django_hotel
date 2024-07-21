import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";
const StyledFormDiv = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const StyledInputField = styled.input`
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

const StyledLabel = styled.label`
  padding: 0;
  margin: 0 1rem;
  transition: all 0.2s;
  text-align: left;
  font-size: 1.4rem;
  color: var(--color-grey-500);
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 7px;
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  font-size: 1.8rem;
  padding: 0.8rem 0;
`;
function RegisterForm({ handleLogin }) {
  const { control, register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  function onSubmit(e) {
    setIsLoading(true);
    // const config = {
    //   headers: {
    //     "Content-type": "apploccation/json",
    //   },
    // };
    async function userLogin() {
      try {
        const { data } = await axios.post(
          "http://127.0.0.1:8000/api/users/register/",
          {
            name: e.first_name,
            email: e.email,
            password: e.password,
          }
        );
        handleLogin();
        setIsLoading(false);
        toast.success("Account has been created");
      } catch {
        setIsLoading(false);
        toast.error("Something went wrong, please try later");
      }
      // localStorage.setItem("userInfo", JSON.stringify(data));
    }
    userLogin();
  }

  function onError() {}
  return (
    <StyledFormDiv onSubmit={handleSubmit(onSubmit, onError)}>
      <StyledInputField
        name="first_name"
        type="text"
        placeholder="First Name"
        {...register("first_name")}
      />
      <StyledLabel htmlFor="first_name" className="label">
        First Name
      </StyledLabel>

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
      <LoginButton type="submit">Register</LoginButton>
    </StyledFormDiv>
  );
}

export default RegisterForm;
