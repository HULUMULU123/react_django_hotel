import React, { useEffect, useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import DatePicker from "./DatePicker";
import styled from "styled-components";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { t } from "i18next";
import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";
import moment from "moment";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import DatePickerComponent from "./DatePicker";
import { GoArrowRight } from "react-icons/go";
import GuestInput from "../../ui/GuestInput";
import BookingList from "./BookingList";
import { StyledBookingInformation } from "../../pages/Booking";
import FirstTimeBooking from "../../ui/FirstTimeBooking";
import { useSearchParams } from "react-router-dom";
import { useSearchBooking } from "./useSeachBooking";
import toast from "react-hot-toast";
// import { useBooking } from "./useBooking";

const StyledBookingForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  z-index: 999;
  left: 50%;
  transform: translateX(-50%);
  top: 25rem;
  width: 80rem;
  height: 10rem;
  margin: 0 auto;
  background: var(--color-grey-0);
  box-shadow: 0 1px 8px var(--color-grey-200);
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
  margin-bottom: 5rem;
  & svg {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

const StyledImage = styled.img`
  margin: 0 auto;
  height: 30rem;
  width: 90rem;
  border-radius: 30px;
`;

const DisplayFlex = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

function BookingForm({ bookingRooms, setNextStep }) {
  // const { isLoading, booking } = useBooking();
  const { t, i18n } = useTranslation();
  const { control, setValue, register, handleSubmit } = useForm();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [bookingRooms, setBookingRooms] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  // const { isSearching, booking } = useSearchBooking();

  function onSubmit(data) {
    console.log(data);
    if (data.startDate._d > data.endDate._d) {
      toast.error("Start date must be earlier than end date!");
      return;
    }
    const formatStartDate = `${data.startDate._d
      .toString()
      .slice(11, 15)}-${data.startDate._d
      .toString()
      .slice(4, 7)}-${data.startDate._d.toString().slice(8, 10)}`;

    const formatEndDate = `${data.endDate._d
      .toString()
      .slice(11, 15)}-${data.endDate._d
      .toString()
      .slice(4, 7)}-${data.endDate._d.toString().slice(8, 10)}`;
    console.log(formatStartDate);

    searchParams.set("startDate", formatStartDate);
    searchParams.set("endDate", formatEndDate);
    searchParams.set("guests", data.numberOfGuests);
    setSearchParams(searchParams);
    setNextStep(false);

    // try {
    //   axios
    //     .post("http://127.0.0.1:8000/api/booking", {
    //       startDate: formatStartDate,
    //       endDate: formatStartDate,
    //       numGuests: data.numberOfGuests,
    //     })
    //     .then((response) => setBookingRooms(response.data));
    // } catch (err) {
    //   console.log("Failed fetching about's data");
    //   console.log(err.toJSON());
    //   return;
    // }
  }
  function onError(data) {
    console.log(data);
  }

  // const handleInputChange = useCallback(
  //   (event) => {
  //     setNumberOfGuests(event.target.value);
  //   },
  //   [setNumberOfGuests]
  // );
  // useEffect(() => {
  //   document.getElementById("numberOfGuests").value = numberOfGuests;
  // }, [numberOfGuests]);
  // function handleSubmit(data) {
  //   data.preventDefault();

  //   let date;
  //   if (data.target[0].value === "en") {
  //     date = data.target[1].value.split("/", 3);
  //   }
  //   const date_2 = date[1] + date[0] + date[2];
  //   const date_1 = date_2.join("/");
  //   console.log(date_1);
  //   const x = { date: data.target[1].value };

  //   axios
  //     .post("http://localhost:5173/booking", x)
  //     .then((res) => console.log(res));
  // }
  return (
    <DisplayFlex>
      <StyledImage src="-6-2.jpg" />
      <StyledBookingForm onSubmit={handleSubmit(onSubmit, onError)}>
        <input hidden disabled id="locale" value={moment.locale()} />
        <DatePickerComponent
          placeHolder={"datepicker.start"}
          name={"startDate"}
          setDate={setStartDate}
          control={control}
          {...register("startDate")}
        />
        <GoArrowRight />
        <DatePickerComponent
          placeHolder={"datepicker.end"}
          name={"endDate"}
          control={control}
          {...register("endDate")}
        />
        <GuestInput
          id="numberOfGuests"
          valueText={`${t("datepicker.guests")}:`}
          name="numberOfGuests"
          control={control}
          setValue={setValue}
          {...register("numberOfGuests")}
        />

        <Button size="large" variation="search" type="submit">
          <HiMagnifyingGlass />
        </Button>
      </StyledBookingForm>
      {/* <StyledBookingInformation>
        {bookingRooms ? (
          <BookingList data={bookingRooms} />
        ) : (
          <FirstTimeBooking />
        )}
      </StyledBookingInformation> */}
    </DisplayFlex>
  );
}

export default BookingForm;
