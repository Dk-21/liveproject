import React,{useState} from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form, DropdownButton, Dropdown, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'


  const Usermanagement = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [mode, setMode] = React.useState("out-in");
  // const [state, setState] = React.useState(true);
  return (
    <>
    {/* 
     */}
     <Navbar variant="dark" bg="primary" expand="lg">
  <Container fluid>
    <Navbar.Brand href="">                 User-Managment                  </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Choose the Police Station"
          padding="100%"
          menuVariant="dark"
        >
          <NavDropdown.Item href="">Station 1</NavDropdown.Item>
          <NavDropdown.Item href="">Station 2</NavDropdown.Item>
          <NavDropdown.Item href="">Station 3</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">exit</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br/>
<br/>


      {/* <div class="container mt-5">
      <div class="d-flex justify-content-center row">
      <div class="col-md-10">
      <div class="rounded"> */}
      <div class="table-responsive table-borderless">
      <table class="table">
      <thead>
      <tr>
      <th class="text-center">S. No.</th>
      <th>User Name</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Designation</th>
      <th>Status</th>
      <th></th>
      <th></th>
      <th></th>
      </tr>
      </thead>
      <tbody class="table-body">

      <tr className="cell-1">
      <td className="text-center">1</td>
      <td>DB_123</td>
      <td>Debayan</td>
      <td>Rakshit</td>
      <td>Investigation Officer</td>
      <td>active</td>
      <td></td>
      <td></td>
      <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
      </tr>

      <tr id="demo" className="collapse cell-1 row-child">
      <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
      <td colspan="1">Product&nbsp;</td>
      <td colspan="3">iphone SX with ratina display</td>
      <td colspan="1">QTY</td>
      <td colspan="2">2</td>
      </tr>

      </tbody>
      <tbody class="table-body">

      <tr className="cell-1">
      <td className="text-center">1</td>
      <td>DB_123</td>
      <td>Debayan</td>
      <td>Rakshit</td>
      <td>Investigation Officer</td>
      <td>active</td>
      <td></td>
      <td></td>
      <td className="table-elipse" data-toggle="collapse" data-target="#demo"><i className="fa fa-ellipsis-h text-black-50"></i></td>
      </tr>

      <tr id="demo" className="collapse cell-1 row-child">
      <td className="text-center" colspan="1"><i className="fa fa-angle-up"></i></td>
      <td colspan="1">Product&nbsp;</td>
      <td colspan="3">iphone SX with ratina display</td>
      <td colspan="1">QTY</td>
      <td colspan="2">2</td>
      </tr>

</tbody>
     </table> 
        <Button variant="primary" onClick={handleShow}>
        Add
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

</div>

  
      {/* <div className="main">
        <SwitchTransition mode={mode}>
          <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
            <div className="button-container">
              <Button onClick={() => setState(state => !state)}>
                {state ? "Hello, world!" : "Goodbye, world!"}
              </Button>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div> */}
    </>
  );
}

export default Usermanagement;