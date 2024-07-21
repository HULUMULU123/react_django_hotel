import React, { Suspense } from "react";
import RoomsTable from "../features/rooms/RoomsTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTableOperations from "../features/rooms/RoomTableOperations";
import { lazy } from "react";
import Spinner from "../ui/Spinner";

// const RoomsTable = lazy(() => import("../features/rooms/RoomsTable"));
// const Heading = lazy(() => import("../ui/Heading"));
// const Row = lazy(() => import("../ui/Row"));
// const RoomTableOperations = lazy(() =>
//   import("../features/rooms/RoomTableOperations")
// );
function Rooms() {
  return (
    <div>
      <Row type="horizontal">
        <Heading as="h1">All Rooms</Heading>
        <RoomTableOperations />
      </Row>
      <RoomsTable />
    </div>
  );
}

export default Rooms;
