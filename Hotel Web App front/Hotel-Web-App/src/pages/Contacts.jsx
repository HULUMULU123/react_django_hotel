// import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React, { lazy, Suspense } from "react";
// import MapComponent from "../ui/MapComponent";
// import ContactTable from "../ui/ContactTable";
// import Heading from "../ui/Heading";
import styled from "styled-components";
import Spinner from "../ui/Spinner";

const MapComponent = lazy(() => import("../ui/MapComponent"));
const ContactTable = lazy(() => import("../ui/ContactTable"));
const Heading = lazy(() => import("../ui/Heading"));
const StyledContactDiv = styled.div`
  display: flex;
  min-height: 40rem;
`;
function Contacts() {
  return (
    <div>
      <Suspense fallbac={<Spinner />}>
        <Heading as="h1" margin="8rem">
          Contact us
        </Heading>
        <StyledContactDiv>
          <ContactTable />
          <MapComponent />
        </StyledContactDiv>
      </Suspense>
    </div>
  );
}

export default Contacts;
