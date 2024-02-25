import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './youtube-logo.jpeg';
import Content from './Content';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" onClick={handleShow} style={{margin:"1rem"}}>
      <i className="fa-solid fa-bars"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static" style={{color:"white"}} scroll={true} >
        <Offcanvas.Header closeButton closeVariant='white' style={{backgroundColor:"grey"}} >
          <Offcanvas.Title><img src={logo} style={{width:"4.5rem",borderRadius:"25px 25px 25px 25px"}}></img></Offcanvas.Title>
        </Offcanvas.Header >
        <Offcanvas.Body style={{backgroundColor:"grey"}}>
          <Content></Content>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;