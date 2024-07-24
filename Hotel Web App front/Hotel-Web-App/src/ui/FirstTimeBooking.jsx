import React from "react";
import Heading from "./Heading";
import styled from "styled-components";

const StyledFirstBooking = styled.div`
  display: felx;
  align-items: center;
  margin-top: 10rem;
`;
function FirstTimeBooking() {
  return (
    <StyledFirstBooking>
      <Heading as="h2" position="center">
        Давайте проверим наличие свободных мест!🦑
      </Heading>
    </StyledFirstBooking>
  );
}

export default FirstTimeBooking;
