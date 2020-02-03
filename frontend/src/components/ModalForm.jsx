import React, { useState } from "react";
import AddEditForm from "./AddEditForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default function ModalForm(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(prevState => !prevState);
  };
  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );
  const label = props.buttonLabel;

  let button = "";
  let title = "";

  if (label === "Edit") {
    button = (
      <Button
        color="warning"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px" }}
      >
        {label}
      </Button>
    );
    title = "Edit Item";
  } else {
    button = (
      <Button
        color="success"
        onClick={toggle}
        style={{ float: "left", marginRight: "10px", marginBottom: "30px" }}
      >
        {label}
      </Button>
    );
    title = "Add New Item";
  }
  return (
    <div>
      {button}
      <Modal isOpen={modal} toggle={toggle} className={props.className}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {title}
        </ModalHeader>
        <ModalBody>
          <AddEditForm
            addItemToState={props.addItemToState}
            updateState={props.updateState}
            toggle={toggle}
            item={props.item}
          />
        </ModalBody>
      </Modal>
    </div>
  );
}
