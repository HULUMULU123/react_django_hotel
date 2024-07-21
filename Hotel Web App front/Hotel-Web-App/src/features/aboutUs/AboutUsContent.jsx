import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import StyledContentCard, {
  StyledParagraphCard,
  StyledText,
} from "./AboutUsContentCard";
import SliderFeatures from "./SliderFeatures";
import { useTranslation } from "react-i18next";
import axios from "axios";

import Spinner from "../../ui/Spinner";
import { useAbout } from "./useAbout";
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import { Link } from "react-router-dom";
import { useAboutRooms } from "./useAboutRooms";
import HotelMaraks from "./HotelMaraks";
import Advantages from "./Advantages";

const StyledGridDiv = styled.div``;
const variations = {
  slider: css`
    margin-bottom: 3rem;
  `,
};
const StyledContentDiv = styled.div`
  /* margin-top: 4rem; */
  display: flex;

  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  ${(props) => variations[props.variation]};
  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledLinkDiv = styled.div`
  margin-top: auto;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: 2rem;
  @media screen and (max-width: 1200px) {
    margin-right: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  padding: 1.4rem;
  background-color: var(--color-brand-700);
  border-radius: 10px;
  font-size: 2rem;
  border: 2px solid var(--color-brand-800);
  @media screen and (max-width: 1210px) {
    font-size: 1.4rem;
  }

  &:active {
    transform: scale(0.95);
  }

  ${(props) =>
    props.content === "slider"
      ? css`
          max-width: 25rem;
          color: #fff;
          margin-top: auto;
          text-align: center;
          border-radius: 30px;
          padding: 1.2rem;
        `
      : ""}
`;
function AboutUsContent() {
  const { t, i18n } = useTranslation();
  const { isLoading, aboutRooms } = useAboutRooms();
  // const [about, setAbout] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  const baseImgUrl = "http://127.0.0.1:8000/";
  // useEffect(() => {
  //   async function fetchAbout() {
  //     const { data } = await axios.get("http://127.0.0.1:8000/api/aboutRooms");
  //     setAbout(data);
  //     setIsLoading(false);
  //   }

  //   fetchAbout();
  // }, []);
  if (isLoading) return <Spinner />;
  return (
    <StyledGridDiv>
      <SliderFeatures />

      <HotelMaraks />
      <Advantages />
      <StyledContentDiv>
        {aboutRooms.map((el) => (
          <StyledContentCard
            size="small"
            key={el.heading}
            imageUrl={baseImgUrl + el.image}
          >
            <StyledText type="mini">
              <Heading as="h4">{el.heading}</Heading>
              <StyledParagraphCard type="mini">
                {el.description}
              </StyledParagraphCard>
            </StyledText>
            <StyledLinkDiv>
              <StyledLink to={el.link}>Book now!</StyledLink>
            </StyledLinkDiv>
          </StyledContentCard>
        ))}
      </StyledContentDiv>
    </StyledGridDiv>
  );
}

export default AboutUsContent;
