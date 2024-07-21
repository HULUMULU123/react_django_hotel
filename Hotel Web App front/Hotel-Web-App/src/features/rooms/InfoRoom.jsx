import React, { lazy, Suspense } from "react";
import styled, { css } from "styled-components";
import Modal from "../../ui/Modal";
import RoomsSlider from "./RoomsSlider";
import { useRooms } from "./useRooms";
import Spinner from "../../ui/Spinner";
import RoomsAdvantages from "../../ui/RoomsAdvantages";
import { useParams } from "react-router-dom";
import { useRoom } from "./useRoom";
import { LuRefreshCcw } from "react-icons/lu";
import Discount from "../../ui/Discount";
import Heading from "../../ui/Heading";
import Monuments, {
  StyledDivMonument,
  StyledParagraphMonument,
} from "../../ui/Monuments";
import { StyledBottomDiv, StyledLink } from "./RoomCard";
import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";

// const RoomsSlider = lazy(() => import("./RoomsSlider"));
// const RoomsAdvantages = lazy(() => import("../../ui/RoomsAdvantages"));
// const Discount = lazy(() => import("../../ui/Discount"));
// // const { useRoom } = lazy(() => import("./useRoom"));
// const Heading = lazy(() => import("../../ui/Heading"));
// const Monuments = lazy(() => import("../../ui/Monuments"));
// const { StyledDivMonument, StyledParagraphMonument } = lazy(() =>
//   import("../../ui/Monuments")
// );
// const { StyledBottomDiv, StyledLink } = lazy(() => import("./RoomCard"));
// const { useMoveBack } = lazy(() => import("../../hooks/useMoveBack"));
// const Button = lazy(() => import("../../ui/Button"));
const StyledRoomInfo = styled.div`
  display: flex;
  background-color: var(--color-grey-0);
  padding: 2rem;
  border: 1px solid var(--color-grey-200);
  box-shadow: 0 1px 8px var(--color-grey-200);
  border-radius: 5px;
`;
const StyledRoomsPrice = styled.div`
  display: flex;
  /* margin-top: 0.3rem;
  margin-left: 1rem;
  margin-bottom: 1rem; */
  align-items: center;
  gap: 2rem;
`;

const StyledPrice = styled.p`
  color: var(--color-brand-600);
  font-size: 1.7rem;
  font-weight: 500;
  ${(props) =>
    props.type === "roomInfo"
      ? css`
          font-size: 2.2rem;
        `
      : ""}
`;

const StyledDiv = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
`;
const StyledParagraph = styled.p`
  padding: 0.7rem;
  margin-top: 2rem;
  background-color: var(--color-grey-50);
  border-radius: 5px;
  color: var(--color-grey-900);
  border: 1px solid var(--color-grey-200);
  margin-bottom: 1rem;
`;

function InfoRoom() {
  let { roomId } = useParams();
  const { isLoading, room } = useRoom(roomId);
  const baseImgUrl = "http://127.0.0.1:8000/";

  const moveBack = useMoveBack();
  if (isLoading) return <Spinner />;
  return (
    <>
      <Button
        onClick={moveBack}
        size="small"
        variation="secondary"
        width="small"
      >
        &larr; Go back
      </Button>
      {room.map((el) => (
        <StyledRoomInfo key={el.id}>
          <RoomsSlider base={baseImgUrl} room={el} />
          <StyledDiv>
            <Heading as="h2">{el.name}</Heading>
            <StyledParagraph>{el.description}</StyledParagraph>
            <StyledDivMonument>
              <StyledParagraphMonument>Преимущества</StyledParagraphMonument>
              <RoomsAdvantages
                base={el.base_advatages}
                premium={el.large_bed}
                type="modal"
              />
            </StyledDivMonument>

            <Monuments />
            <StyledBottomDiv>
              <StyledRoomsPrice>
                {!el.discount ? (
                  <StyledPrice type="roomInfo">
                    {el.price.toLocaleString("ru-RU")}₽
                  </StyledPrice>
                ) : (
                  <Discount
                    price={el.price.toLocaleString("ru-RU")}
                    discount={(
                      (el.price * (100 - el.discount)) /
                      100
                    ).toLocaleString("ru-RU")}
                    type="roomInfo"
                  />
                )}
                <StyledParagraphMonument type="light">
                  за ночь
                </StyledParagraphMonument>
              </StyledRoomsPrice>
              <StyledLink to="/booking" type="roomInfo">
                Проверить наличие
              </StyledLink>
            </StyledBottomDiv>
          </StyledDiv>
        </StyledRoomInfo>
      ))}
    </>
  );
}

export default InfoRoom;
