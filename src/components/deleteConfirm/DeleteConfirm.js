import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = (props) => {
  const indexOfDelete=props.deleteIndex;
  const deleteFormData = (index) => {
    props.deleteGetDataIndex(index) 
    handleClose()
    };
  
  const handleClose = () => props.setisShowDelete(false);
  const handleShow = () => props.setisShowDelete(true);
    return (


      <Modal show={handleShow} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Delete Confirmation</Modal.Title>
      </Modal.Header> */}
      <Modal.Body><div className="alert alert-secondary">Are you sure you want to delete?</div></Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={()=>{deleteFormData(indexOfDelete)}} > 
          Delete
        </Button>
      </Modal.Footer>
    </Modal>


    )
}
 
export default DeleteConfirmation;