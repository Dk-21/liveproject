import { SwitchTransition, CSSTransition } from "react-transition-group";
import { Button, Form, DropdownButton, Dropdown, Navbar, Container, Nav, NavDropdown, Table, Row, Col, Modal, Grid } from "react-bootstrap";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState,Component } from "react";
import Multiple from "./multidept";
import Multidivi from "./multidivi";


export default function Schedulevisit () {
    // const [mode, setMode] = React.useState("out-in");
    // const [state, setState] = React.useState(true);
    // const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    

    return (
      <>
    <Navbar variant="dark" bg="primary" expand="lg">
        <Container fluid>
        <Navbar.Brand href="" fontSize="25"> Schedule Visit</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        </Container>
    </Navbar>
    <br/>
    <h2>Evidence Details</h2>
    <Table stripped bordered hover size="sm">
    <thead>
    <tr>
      <th width="15%">Item Number</th>
      <th width="15%">Qunatity</th>
      <th width="15%">Type of evidence</th>
      <th width="55%">Evidence Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1.</td>
      <td>4</td>
      <td>Guns</td>
      <td>GUNS Description</td>
    </tr>
    <tr>
      <td>2.</td>
      <td>4</td>
      <td>Knife</td>
      <td>Knife Description</td>
    </tr>
    <tr>
      <td>3.</td>
      <td>2</td>
      <td>Bomb</td>
      <td>Bomvb Description</td>
    </tr>
    <tr>
      <td>4.</td>
      <td>1</td>
      <td>hammer</td>
      <td>hammer Description</td>
    </tr>
  </tbody>
</Table>
        <Button variant="primary" onClick={handleShow}>
        Add
        </Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details for Schedule the Visit </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            
       

        {/* <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Department
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Department 1</a>
            <a class="dropdown-item" href="#">Department 2</a>
            <a class="dropdown-item" href="#">Department 3</a>
        </div>
        </div> */}

        <Multiple />
        
        <br></br>

        {/* <div class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Division
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#">Division 1</a>
            <a class="dropdown-item" href="#">Division 2</a>
            <a class="dropdown-item" href="#">Divison 3</a>
        </div>
        </div>
        <br></br> */}
        
        <Multidivi />
        <br></br>

        <Form.Group>
            <Form.Label>Enter The Quantity</Form.Label>
            <Form.Control type="number" placeholder="Enter the quantity (min. 1 and max till the qnt of evidence )" />
        </Form.Group>
        
        <br></br>

        <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Remarks</label>
        <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
        />
        </div>
        <br></br>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <br></br>
      <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Remarks</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      />
    </div>
    <br></br>
    <Button variant="primary">Submit</Button>{' '}


  
      </>
    );
  }

