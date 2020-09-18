import React from 'react';
import { Modal, Button, FormControl } from 'react-bootstrap';

const EditModal = (props) => {
  const checkRange = () => {
    let value = props.data[props.data.type];
    const min = +value - (value / 100 * 10);
    const max = +value + (value / 100 * 10);

    return {
      min, max
    }
  }
  return (
    <Modal
      show={props.show}
      onHide={props.handleClose}
      animation={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>{checkRange().min} - {checkRange().max}</span>
        <FormControl
          defaultValue={props.data}
          type='number'
          onChange={props.modalHandleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
      </Button>
        <Button variant="primary" onClick={() => props.saveValue(props.data)} disabled={props.disabled}>
          Save Changes
      </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;