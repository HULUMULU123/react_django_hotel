import React, { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import styled from "styled-components";
import axios from "axios";
import { useRooms } from "./useRooms";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
const StyledRoomsTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  gap: 3rem;
`;

function RoomsTable() {
  const { isLoading, rooms } = useRooms();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  //FILTER
  const filterValue = searchParams.get("type_of_room") || "all";

  let filteredRooms;
  if (filterValue === "all") filteredRooms = rooms;
  if (filterValue === "MINI-HOTEL")
    filteredRooms = rooms.filter((room) => room.type_of_room === "MINI-HOTEL");
  if (filterValue === "HOSTEL")
    filteredRooms = rooms.filter((room) => room.type_of_room === "HOSTEL");
  // console.log(filteredRooms);

  //SORT
  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedRooms = filteredRooms.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );
  if (field === "name") {
    const sortedRooms = filteredRooms.sort(
      (a, b) => a.name.localeCompare(b.name) * modifier
    );
    // console.log(sortedRooms);
  }

  const baseImgUrl = "http://127.0.0.1:8000/";
  // const [room, setRoom] = useState([]);
  // useEffect(() => {
  //   async function fetchRoom() {
  //     const { data } = await axios.get("http://127.0.0.1:8000/api/rooms");
  //     setRoom(data);
  //   }

  //   fetchRoom();
  // }, []);
  return (
    <StyledRoomsTable>
      {sortedRooms.map((el) => (
        <RoomCard baseImg={baseImgUrl} room={el} key={el.id} />
      ))}
    </StyledRoomsTable>
  );
}

export default RoomsTable;
