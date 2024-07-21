import React from "react";
import styled from "styled-components";
import GuestField from "./GuestField";
import Heading from "../../ui/Heading";
import { useRoom } from "../rooms/useRoom";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
const StyledBookingList = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  width: 85rem;
  margin-left: auto;
`;

const StyledLink = styled.button`
  margin-left: auto;
  font-size: 2rem;
  padding: 1rem;
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
  border-radius: 7px;
  border: 1px solid var(--color-brand-700);
  box-shadow: 0 1px 10px var(--color-grey-300);
  &:hover {
    background-color: var(--color-brand-800);
    border: 1px solid var(--color-brand-900);
  }
  &:active {
    transform: scale(0.98);
  }
`;

const StyledPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPrice = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 600;
`;
function BookingRoomForm({ room, nights }) {
  const [searchParams] = useSearchParams();
  const guests = searchParams.get("guests") || "";
  const finalPrice = room.price * nights();
  const guests_array = Array.from({ length: guests }, (_, i) => i + 1);

  console.log(finalPrice, "final");
  function handlePayment() {
    axios
      .post("http://127.0.0.1:8000/api/payment/", {
        price: finalPrice,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  //   const { isLoading, room } = useRoom();
  return (
    <StyledBookingList>
      <Heading as="h2">{room.name}</Heading>
      {guests_array.map((num) => (
        <GuestField num={num} key={num} />
      ))}
      <StyledPriceDiv>
        <StyledPrice>Итого: {finalPrice}</StyledPrice>
        <form
          action="http://127.0.0.1:8000/api/payment/"
          method="POST"
          onSubmit="return false"
        >
          <input value={finalPrice} name="price" id="price" readOnly />
          <StyledLink type="submit">Перейти к оплате</StyledLink>
        </form>
      </StyledPriceDiv>
      {/* <StyledLink to="http://127.0.0.1:8000/api/payment" target="_blank">
        Перейти к оплате
      </StyledLink> */}
    </StyledBookingList>
  );
}

export default BookingRoomForm;
