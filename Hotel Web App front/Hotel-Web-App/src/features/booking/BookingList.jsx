import React, { useEffect, useState } from "react";
import BookingItem from "./BookingItem";
import styled from "styled-components";
import { useSearchBooking } from "./useSeachBooking";
import axios from "axios";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import BookingRoomForm from "./BookingRoomForm";
const StyledBookingList = styled.ul`
  display: flex;
  margin-top: 7rem;
  width: 100%;
  gap: 1rem;
  flex-direction: column;
  width: 85rem;
  margin-left: auto;
`;
function BookingList({
  startDate,
  endDate,
  guests,
  bookingRoom,
  setBookingRoom,
  nextStep,
  setNextStep,
}) {
  const [booking, setBooking] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [nextStep, setNextStep] = useState(false);
  // const [bookingRoom, setBookingRoom] = useState(null);
  // const { isSearching, booking } = useSearchBooking();
  console.log(startDate, endDate, guests);

  useEffect(() => {
    function fetchAbout() {
      setIsLoading(true);
      axios
        .get(
          `http://127.0.0.1:8000/api/booking/${startDate}/${endDate}/${guests}/`
        )
        .then((response) => {
          setBooking(response.data);
          setIsLoading(false);
        });
    }

    fetchAbout();
  }, [startDate, endDate, guests]);
  // const { isSearching, booking } = useSearchBooking();

  function numberOfNights() {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(startDate);
    const secondDate = new Date(endDate);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay));
  }
  return (
    <>
      {nextStep ? (
        <BookingRoomForm room={bookingRoom} nights={numberOfNights} />
      ) : (
        <StyledBookingList>
          {booking && !isLoading && (
            <>
              {booking.map((room) => (
                <BookingItem
                  room={room}
                  key={room.id}
                  setNextStep={setNextStep}
                  setBookingRoomId={setBookingRoom}
                />
              ))}
            </>
          )}
          {isLoading && <Spinner />}
          {!booking && !isLoading && <Empty />}
        </StyledBookingList>
      )}
    </>
  );
}

export default BookingList;
