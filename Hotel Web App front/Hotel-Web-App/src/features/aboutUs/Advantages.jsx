import React from "react";
import styled from "styled-components";
import { TfiComment } from "react-icons/tfi";
import { SlCup } from "react-icons/sl";
import Heading from "../../ui/Heading";
import { GoCalendar, GoStar } from "react-icons/go";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4rem 0;
`;
const StyledAdvantagesList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StyledAdvantagesItem = styled.li`
  display: flex;
  flex-direction: column;
  & svg {
    background-color: var(--color-brand-100);
    margin: 0 auto;
    width: 7rem;
    height: 7rem;
    fill: var(--color-grey-0);
    padding: 1.5rem;
    border-radius: 100px;
    overflow: visible;
  }

  & p {
    text-align: center;
  }
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem auto;
  text-align: center;
`;

const StyledHeading = styled.h2`
  font-size: 5rem;
`;
function Advantages() {
  return (
    <StyledDiv>
      <StyledText>
        <StyledHeading>Комфорт и удобство</StyledHeading>
        <span>ААА я не знаю что писать</span>
      </StyledText>
      <StyledAdvantagesList>
        <StyledAdvantagesItem>
          <SlCup />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <TfiComment />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <GoStar />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </StyledAdvantagesItem>
        <StyledAdvantagesItem>
          <GoCalendar />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </StyledAdvantagesItem>
      </StyledAdvantagesList>
    </StyledDiv>
  );
}

export default Advantages;
