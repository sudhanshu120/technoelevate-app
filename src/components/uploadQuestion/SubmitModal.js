
import { Button, Modal } from 'react-bootstrap'
import './Modal.css';
function SubmitModal(props) {
  // const [smShow, setSmShow] = useState(false);

  const handleClose = () => props.setisShowSubmitModal(false);
  const handleShow = () => props.setisShowSubmitModal(true);

  return (
    <div >
      {/* <Button onClick={() => setSmShow(true)}>Small modal</Button>{' '}  */}
      <Modal show={handleShow} onHide={handleClose} className="modal__main"
        size="sm"
        show={handleShow}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-md"
      >

        <Modal.Body id="example-modal-sizes-title-md">
          <div  >
            <div id="container">
            {/* <div id="success"><i className="fa-regular fa-circle-check"></i></div> */}
            <div id="success"><i class="far fa-check-circle" style={{color:"#05CC76",fontSize:"60px",marginBottom:"10px"}}></i></div>
            <p id="text">Successfully Uploaded</p>
            <div id="btn" style={{textAlign:"center"}}><Button onClick={ handleClose } id="button">OK</Button></div>
            </div>
          </div>
        </Modal.Body>

      </Modal>

    </div>
  );

}
export default SubmitModal