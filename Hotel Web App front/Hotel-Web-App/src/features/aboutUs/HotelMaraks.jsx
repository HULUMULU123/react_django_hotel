import React from "react";
import styled, { css } from "styled-components";
import Mark_1 from "./Mark_1";
import Mark_2 from "./Mark_2";
import Mark_3 from "./Mark_3";
import Mark_4 from "./Mark_4";
const StyledMarksDiv = styled.div`
  display: flex;
  width: 100%;
`;

const StyledTextDiv = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
`;
const StyledMarkSpan = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 10rem;
  font-weight: 800;
  color: var(--color-brand-600);
  letter-spacing: 0.3rem;
  ${(props) =>
    props.content === "star"
      ? css`
          font-size: 7rem;
          margin: auto 0;
        `
      : ""}
`;
const StyledWebList = styled.ul`
  display: flex;

  align-items: center;
  margin-left: auto;
  width: 65%;
  justify-content: space-between;

  & li {
    width: 20rem;
    height: 5rem;
    display: flex;
  }
  & a {
    display: flex;
  }
  & svg {
    width: 100%;
    margin-top: auto;
  }
`;
function HotelMaraks() {
  return (
    <StyledMarksDiv>
      <StyledTextDiv>
        <StyledMarkSpan>9.6</StyledMarkSpan>
        <StyledMarkSpan content="star">★★</StyledMarkSpan>
      </StyledTextDiv>
      <StyledWebList>
        <li style={{ width: "12rem" }}>
          <a
            href="https://travel.yandex.ru/hotels/khabarovsk/kaiut-kompaniia/?adults=1&checkinDate=2024-07-20&checkoutDate=2024-07-21&childrenAges=&searchPagePollingId=1c17d618429edf5ea29d048724ed69ad-0-newsearch&seed=portal-hotels-search"
            target="_blank"
          >
            <Mark_4 />
          </a>
        </li>
        <li>
          <a
            href="https://ostrovok.ru/hotel/russia/khabarovsk/mid8751911/kayutkompaniya_hostel/?q=1813&dates=20.07.2024-21.07.2024&guests=1&price=one&room=s-3acbbcfe-8b5e-5d7c-9ac1-f2a7e858c2bf&serp_price=kayutkompaniya_hostel.1145.RUB.h-3be5fcd1-babe-56b9-876e-b41e545f741e&sid=8fd6b79d-bb53-4250-9c3d-4d5432b57780"
            target="_blank"
          >
            <Mark_1 />
          </a>
        </li>
        <li style={{ width: "9.85rem" }}>
          <a
            href="https://hotel.tutu.ru/offers/details?check_in=2024-07-21&check_out=2024-07-23&details_params=a%3D2&filters[0]=optionFiltersList.rating.rating_more_zero&filters[1]=optionFiltersList.distance_to_center.distance_to_center_any_distance&filters[2]=optionFiltersList.extra_bed.extra_bed_no_value&geo_id=7650619&geo_name=%D0%A5%D0%B0%D0%B1%D0%B0%D1%80%D0%BE%D0%B2%D1%81%D0%BA&geo_type=locality&room[0]=1.&search_id=45e46690-e37e-4d51-8925-a45066fd350f&sorting=relevanceDesc"
            target="_blank"
          >
            <Mark_2 />
          </a>
        </li>
        <li style={{ width: "13rem" }}>
          <a
            href="https://101hotels.com/main/cities/habarovsk/hostel_kayut-kompaniya.html?adults=1&in=20.07.2024&out=21.07.2024&ctx=hotels&selected_room_id=1310797&selected_placement_id=507844"
            target="_blank"
          >
            <Mark_3 />
          </a>
        </li>
      </StyledWebList>
    </StyledMarksDiv>
  );
}

export default HotelMaraks;
