import React from "react";
import { Modal } from "react-bootstrap";

function addWaterTap({ prev, next }) {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Water Tap</Modal.Title>
      </Modal.Header>

      <button onClick={prev}>Previous</button>
      <button onClick={next}>Next</button>
    </>
  );
}

export default addWaterTap;
