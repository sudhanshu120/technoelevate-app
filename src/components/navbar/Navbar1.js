import {Button, DropdownButton} from 'react-bootstrap'
import React, { useState } from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './logo2.png'
import './Navbar.css'
import Dropdown from '@restart/ui/esm/Dropdown';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
//import Dropdown from 'react-bootstrap'


function Navbar1() {
  const [selectedDate, setselectedDate]=useState()
  const [selectDate, setselectDate]= useState()
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
  
    <Navbar.Brand href="#"><img src={Logo} className="logo" alt=""/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <DropdownButton id="dropdown-basic-button" className="tech" title="Technology">
  <Dropdown.Item href="#/action-1">React js</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Javascript</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Java</Dropdown.Item>
</DropdownButton>
<DropdownButton id="dropdown-basic-button" className="level" title="Level">
  <Dropdown.Item href="#/action-1">Easy</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
</DropdownButton>
        

        <div className="fdate">
          <DatePicker id='fromdate'
          placeholderText='From Date'
          selected={selectedDate} onChange ={date=>{setselectedDate(date)}}
          dateFormat='dd/MM/yyyy'
          maxDate={new Date()}
          showYearDropdown
          scrollableMonthYearDropdown/>
          <i class='far fa-calander' id='call'/>
        </div>
        <div className="todate">
          <DatePicker id='dateto'
          placeholderText='To Date'
          selected={selectedDate} onChange ={date=>{setselectedDate(date)}}
          dateFormat='dd/MM/yyyy'
          maxDate={new Date()}
          showYearDropdown
          showMonthDropdown
          scrollableMonthYearDropdown/>
          <i class='far fa-calander' id='call'/>
        </div>

        
          
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navbar1
