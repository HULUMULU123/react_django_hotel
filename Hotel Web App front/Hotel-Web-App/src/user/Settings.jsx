import React from "react";
import Heading from "../ui/Heading";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import axios from "axios";
import { useUser } from "../context/UserContext";
import { LoginButton, StyledInputField, StyledLabel } from "./LoginForm";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

function Settings() {
  const { userInfo, setUserInfo } = useUser();
  const { register, handleSubmit } = useForm();
  function onSubmit(e) {
    console.log(e.new_email);
    toast.success("Your email has been changed");
    axios.post("http://127.0.0.1:8000/api/users/changeemail/", {
      email: userInfo.email,
      new_email: e.new_email,
    });
    window.location.href = "/about";
    localStorage.removeItem("userInfo");
  }
  function onError() {}
  return (
    <div>
      <Heading as="h2">Change account data</Heading>
      <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
        <StyledInputField
          type="email"
          {...register("new_email")}
          name="email"
          placeholder="New email"
        />
        <StyledLabel htmlFor="email" className="label">
          New email
        </StyledLabel>
        <button type="submit">Change email</button>
      </StyledForm>
    </div>
  );
}

export default Settings;
