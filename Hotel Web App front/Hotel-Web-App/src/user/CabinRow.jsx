import styled from "styled-components";
import { useState } from "react";

// import { formatCurrency } from "../../utils/helpers";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import React from "react";
import Modal from "../ui/Modal";
import Confirmation from "./Confirmation";
import Menus from "../ui/Menus";
import ConfirmDelete from "../ui/ConfirmDelete";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
  border-radius: 7px;
  margin-left: 1rem;
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const StyledStatus = styled.p`
  padding: 0.2rem;
  background-color: var(--color-green-100);
  color: var(--color-green-700);
  text-align: center;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.1rem;
`;

const StyledCancelButton = styled.button`
  border: none;
  height: 100%;
  width: 50%;
  background-color: var(--color-red-500);
  border-radius: 10px;
  & svg {
    color: var(--color-grey-0);
    height: 15px;
    width: 15px;
  }
`;
function CabinRow({ booking }) {
  const [showForm, setShowForm] = useState(false);

  const { id, room_id, capacity, start_date, end_date, img_1, user_email } =
    booking;

  const baseImgUrl = "http://127.0.0.1:8000/";
  function handleDuplicate() {}

  return (
    <>
      <TableRow role="row">
        <Img src={baseImgUrl + img_1} />
        <Cabin>{room_id}</Cabin>

        <div>{start_date}</div>
        <div>{end_date}</div>
        <div>
          <StyledStatus>Unconfirmed</StyledStatus>
        </div>
        {/* <Price>{formatCurrency(regularPrice)}</Price>
        {discount ? (
          <Discount>{formatCurrency(discount)}</Discount>
        ) : (
          <span>&mdash;</span>
        )} */}
        {/* <div>
          <button onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm((show) => !show)}>
            <HiPencil />
          </button>
          <button>
            <HiTrash />
          </button>
        </div> */}

        {/* <Modal></Modal> */}
        {/* <div>
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={id} />

              <Menus.List id={id}>
                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delete">
                <ConfirmDelete resourceName="cabins" />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div> */}
        <StyledCancelButton>
          <HiTrash />
        </StyledCancelButton>
      </TableRow>
      {/* {showForm && <CreateCabinForm cabinToEdit={cabin} />} */}
    </>
  );
}

export default CabinRow;
