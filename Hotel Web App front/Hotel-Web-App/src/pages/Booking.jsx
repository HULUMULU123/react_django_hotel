import React, { lazy, Suspense, useState } from "react";
// import BookingForm from "../features/booking/BookingForm";
// import FirstTimeBooking from "../ui/FirstTimeBooking";
import styled from "styled-components";
import { useSearchParams } from "react-router-dom";
import Spinner from "../ui/Spinner";
// import { useSearchBooking } from "../features/booking/useSeachBooking";
// import BookingList from "../features/booking/BookingList";
// import BookingInfo from "../features/booking/BookingInfo";

// const styled = lazy(() => import("styled-components"));
const BookingForm = lazy(() => import("../features/booking/BookingForm"));
const FirstTimeBooking = lazy(() => import("../ui/FirstTimeBooking"));
const BookingList = lazy(() => import("../features/booking/BookingList"));

const BookingInfo = lazy(() => import("../features/booking/BookingInfo"));
export const StyledBookingInformation = styled.div`
  margin-top: 10rem;
`;

const StyledBookingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const StyledBookingTable = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-0);
  width: 25rem;
  height: 20rem;
  box-shadow: 0 1px 8px var(--color-grey-200);
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
`;

const StyledBookingList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
  gap: 1rem;
`;

const StyledBookingItem = styled.li`
  text-transform: uppercase;
  font-size: 1.5rem;
  text-align: center;
  color: var(--color-grey-600);
  & > span {
    color: var(--color-grey-800);
    font-weight: 600;
  }
`;

const StyledSpan = styled.span`
  background: var(--color-grey-500);
  margin: 0 auto;
  width: 90%;
  height: 0.5px;
`;

const StyledHeading = styled.h3`
  color: var(--color-brand-700);
  text-transform: uppercase;
  margin: 1.5rem 2rem;
  font-size: 2.2rem;
  text-align: center;
`;

function Booking() {
  const [searchParams] = useSearchParams();
  const [nextStep, setNextStep] = useState(false);
  const [bookingRoom, setBookingRoom] = useState(null);
  const startDate = searchParams.get("startDate") || null;
  const endDate = searchParams.get("endDate") || "";
  const guests = searchParams.get("guests") || "";
  console.log(guests, "gues");
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <BookingForm setNextStep={setNextStep} />

        {startDate ? (
          <StyledBookingDiv>
            <BookingInfo
              startDate={startDate}
              endDate={endDate}
              guests={guests}
            />
            <BookingList
              startDate={startDate}
              endDate={endDate}
              guests={guests}
              nextStep={nextStep}
              setNextStep={setNextStep}
              bookingRoom={bookingRoom}
              setBookingRoom={setBookingRoom}
            />
          </StyledBookingDiv>
        ) : (
          <FirstTimeBooking />
        )}
      </Suspense>
    </div>
  );
}

export default Booking;
