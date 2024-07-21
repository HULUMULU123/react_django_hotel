import React, { useEffect, useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";

const StyledGuestForm = styled.div`
  display: flex;
  height: 10rem;
  width: 23rem;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  z-index: 20;
  position: absolute;
  top: 18rem;
  background: #fff;
  box-shadow: 0 1px 8px var(--color-grey-200);
  border: 1px solid var(--color-grey-300);
  border-radius: 10px;
`;

const StyledGuestFormContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledGuestChoice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;
const StyledGuestDiv = styled.div`
  width: 20rem;

  background: transparent;
  border-radius: 10px;
  border: 1px solid var(--color-grey-300);
`;

const StyledGuestInput = styled.input`
  font-weight: 200;
  font-size: 19px;
  line-height: 24px;
  color: #484848;
  padding: 11px 11px 9px;
  text-align: center;
  width: 100%;
  border-radius: 10px;
  border: none;

  &:focus {
    background: var(--color-grey-200);
    color: var(--color-grey-700);
  }
`;
function GuestInput({ id, valueText, name, control, setValue }) {
  const [showGuestForm, setShowGuestForm] = useState(false);
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowGuestForm(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function handleGuestForm() {
    setShowGuestForm(!showGuestForm);
  }

  function increaseGuest() {
    if (numberOfGuests < 10) {
      setNumberOfGuests(numberOfGuests + 1);
    }
  }

  function decreaseGuest() {
    if (numberOfGuests > 1) {
      setNumberOfGuests(numberOfGuests - 1);
    }
  }

  useEffect(() => {
    setValue(name, numberOfGuests);
  }, [numberOfGuests]);
  return (
    <>
      <div ref={wrapperRef}>
        <StyledGuestDiv>
          <Controller
            control={control}
            name={name}
            render={({ field: { value, name, onChange } }) => (
              <StyledGuestInput
                onClick={handleGuestForm}
                id={name}
                readOnly
                value={`${valueText} ${value} `}
                name={name}
                onChange={(value) => onChange(value)}
              />
            )}
          />
          {showGuestForm && (
            <div>
              <StyledGuestForm>
                <StyledGuestFormContent>
                  <span>Взрослых:</span>
                  <StyledGuestChoice>
                    <Button
                      type="button"
                      variation="guests"
                      size="small"
                      onClick={decreaseGuest}
                    >
                      -
                    </Button>
                    <span>{numberOfGuests}</span>
                    <Button
                      type="button"
                      variation="guests"
                      size="small"
                      onClick={increaseGuest}
                    >
                      +
                    </Button>
                  </StyledGuestChoice>
                </StyledGuestFormContent>
                <StyledGuestFormContent>
                  <span> Дети до 12:</span>
                  <StyledGuestChoice>
                    <Button
                      type="button"
                      variation="guests"
                      size="small"
                      onClick={decreaseGuest}
                    >
                      -
                    </Button>
                    <span>{numberOfGuests}</span>
                    <Button
                      type="button"
                      variation="guests"
                      size="small"
                      onClick={increaseGuest}
                    >
                      +
                    </Button>
                  </StyledGuestChoice>
                </StyledGuestFormContent>
              </StyledGuestForm>
            </div>
          )}
        </StyledGuestDiv>
      </div>
    </>
  );
}

export default GuestInput;
