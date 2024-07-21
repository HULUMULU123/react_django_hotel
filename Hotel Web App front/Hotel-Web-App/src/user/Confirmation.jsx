import React from "react";
import Modal from "../ui/Modal";
function Confirmation() {
  return (
    <Modal>
      <Modal.Open>
        <button>delete</button>
      </Modal.Open>
      <Modal.Window>Confirmation</Modal.Window>
    </Modal>
  );
}

export default Confirmation;
