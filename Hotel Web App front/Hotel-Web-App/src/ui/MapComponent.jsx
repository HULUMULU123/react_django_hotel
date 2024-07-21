import React from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import styled, { css } from "styled-components";
const StyledMapDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
  border-radius: 10px;
  overflow: hidden;
`;

function MapComponent() {
  return (
    <StyledMapDiv>
      <YMaps query={{ lang: "en_RU" }}>
        <Map
          defaultState={{ center: [48.477792, 135.073022], zoom: 15 }}
          height={400}
          width="100%"
        >
          <Placemark geometry={[48.477792, 135.073022]} />
        </Map>
      </YMaps>
    </StyledMapDiv>
  );
}

export default MapComponent;
