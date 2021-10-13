import React, { useState } from "react";

import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import {
  Nav,
  Form,
  FloatingLabel,
  Button,
  Dropdown,
  Navbar,
  Container,
  FormControl,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";
import img from "./technoelevate.jpg";

function Newheader(props) {


  const [navInfo, setnavInfo] = useState({
    technology: "",
    level:"",
    fromDate:"",
    toDate:"",
    search:""
  });

  const [searchError, setsearchError] = useState( false );
  const [searchErrorCharacter, setsearchErrorCharacter] = useState( false );
  const [fromDateError, setfromDateError] = useState( false );
  const [toDateError, settoDateError] = useState( false );
  const [wrongDateError, setwrongDateError] = useState( false );

  const updateuserData = (event) => {
    setnavInfo({
      ...navInfo,
      [event.target.name]: event.target.value,
    });
  };

  const search = (event)=>{
    event.preventDefault()
    const {search,fromDate,toDate} = navInfo
    const decideDate = validateDate(fromDate,toDate)
   const decideSearch = validateSearch(search)

  function validateDate(fromDate,toDate){
    setwrongDateError(false)
    setfromDateError(false)
    settoDateError(false)
      if(fromDate || toDate){
        if(fromDate && toDate){
            if(fromDate)
            {
              if(fromDate < toDate){
                console.log('correct');
               return true
              }
              else{
                console.log("wrong date")
                setwrongDateError(true)
              }
            }
        }
        else if(fromDate){
          console.log("ToDate is empty")
          settoDateError(true)
        }else{
          console.log("fromDate is empty");
          setfromDateError(true)
        }
      }
      else
      {
        console.log(false);
        return true
      }
   }

    function validateSearch(search){
      if ( search ) {
        setsearchError( false )
        if ( search.search( /[^a-zA-Z]+/ )) {
          setsearchErrorCharacter(false)
          return true
        } else {
          setsearchErrorCharacter(true)
        }
    } else {
      setsearchErrorCharacter( false )
        setsearchError(true)
        return false
    }
  }
    
  if(decideSearch && decideDate){
    const navInfocopy = {...navInfo}
    setnavInfo(navInfocopy)
    console.log(navInfo)
    props.moveAfterValidation(true)
    // <Link to="/search"style={{textDecoration:'none'}}><span style={{color:'#FFFFFF'}}>Search</span></Link>
  }else{

    props.history.push("/")
  }
    

}


  return (
    <>
      <Navbar 
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        style={{ boxShadow: "0px 0px 6px #00000029" }}
      >
        <Container>
          <div>
            <Navbar.Brand href="#home">
            <Link to="/" href="#"class="navbar-brand"><img src={img} style={{width:'200px'}}></img></Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-light"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Row>
                <Col md={2}>
              <div className="mb-2">
               
                <Form.Select aria-label="Floating label select example" name ='technology' value={navInfo.technology}
                  onChange={updateuserData}>
                  <option>Technology</option>
                  <option value="1">ReactJS</option>
                  <option value="2">Angular</option>
                  <option value="3">JavaScript</option>
                </Form.Select>
                
              </div>
             </Col>
          <Col md={2}>
              <div className="mb-2">
                
                <Form.Select aria-label="Default select example" placeholder="Level" name ='level' value={navInfo.level}
                  onChange={updateuserData}>
                  <option>Level</option>
                  <option value="1">Easy</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Expert</option>
                </Form.Select>
                
              </div>
              </Col>
              <Col md={2}>
              <div className="mb-2">
               
                <Form.Control
                  type="text"
                  name="date-of-birth"
                  name = 'fromDate'
                  placeholder="From Date"
                  value={navInfo.fromDate}
                  onChange={updateuserData}
                  onFocus={(e) => (e.target.type = "date")}
                />
                {fromDateError &&
                    <p className="text-danger">Please select from Date</p>}
                {wrongDateError &&
                    <p className="text-danger">Please select correct date</p>}
               
              </div>
              </Col>
              <Col md={2}>

              <div className="mb-2" >
             
                <Form.Control
                  type="text"
                  name="date-of-birth"
                  name = 'toDate'
                  placeholder="To Date"
                  value={navInfo.toDate}
                  onChange={updateuserData}
                  onFocus={(e) => (e.target.type = "date")}
                />
                {toDateError &&
                    <p className="text-danger">Please select To Date</p>}
                {wrongDateError &&
                    <p className="text-danger">Please select correct date</p>}
              </div>
            </Col>
            <Col md={3}>
               <div className="mb-2">
                <InputGroup>
                  <FormControl
                    type="text"
                    placeholder="Search..."
                    name='search'
                    value={navInfo.search}
                  onChange={updateuserData}
                    style={{ width: "315px" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      right: "5px",
                      top: "8px",
                      zIndex: 9999,
                    }}
                  >
                    <i class="fas fa-search" />
                  </div>
                </InputGroup>
                {searchError &&
                    <p className="text-danger">Please enter something </p>}
                {searchErrorCharacter &&
                     <p className="text-danger">Only characters are allowed</p>}
                </div>
                </Col>
                <Col md={1}>
                <Button variant="outline-light" onClick={search} className="mt-1" size="md" style={{backgroundColor:'#FAA81D',width:'100%'}}>
                <Link to="/search"style={{textDecoration:'none'}}><span style={{color:'#FFFFFF'}}>Search</span></Link>
             
                </Button>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(Newheader)
