import styled from "styled-components";
import React from "react";
import { useMoveBack } from "../hooks/useMoveBack";
import Heading from "../ui/Heading";
import { TbUfoOff } from "react-icons/tb";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;

  & svg {
    height: 10rem;
    width: 10rem;
  }
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

const StyledNotFoundHeading = styled.h1`
  font-size: 200px;
  font-weight: 900;
  text-transform: uppercase;
  background: url("/page_not_found_1.jpg") 50% 50%;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <StyledNotFoundHeading>OOPS!</StyledNotFoundHeading>
        <Heading as="h1">
          The page you are looking for could not be found
        </Heading>
        <TbUfoOff />
        {/* <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button> */}
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
