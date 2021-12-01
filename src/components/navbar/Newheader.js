import React, { useState } from "react";
import './Newheader.css';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import axios from "axios";

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
import SearchView from "../search/SearchView";

function Newheader(props) {
  const [navInfo, setnavInfo] = useState({
    technology: "",
    level: "",
    fromDate: "",
    toDate: "",
    search: "",
  });
const [searchData, setsearchData] = useState()

  const [searchError, setsearchError] = useState(false);
  const [searchErrorCharacter, setsearchErrorCharacter] = useState(false);
  const [fromDateError, setfromDateError] = useState(false);
  const [toDateError, settoDateError] = useState(false);
  const [wrongDateError, setwrongDateError] = useState(false);
  const [technologyError, settechnologyError] = useState(false);
  const [levelError, setlevelError] = useState(false);

  const updateuserData = (event) => {
    setnavInfo({
      ...navInfo,
      [event.target.name]: event.target.value,
    });
  };

  // *************
  
  // ***********************
  const searchDataPostToBackend = async (navInfo) => {

  //   try{
  //    const response = await axios.post('http://localhost:2000/questions/search', navInfo)
  //     setsearchData(response.data)
  //     console.log("res - ",response);
  //    console.log("response data = ",response.data);
      
    
  //   }catch(err){
  //     console.log(err);
  //   }

  props.getTheDataFormNewHeader(navInfo)
  
  setsearchData(navInfo)

   }
   <SearchView searchData = {searchData} />
   

   


  // ***********************

  const search = (event) => {
    event.preventDefault();
    const { search, fromDate, toDate, technology, level } = navInfo;
    const decideTech = validateTech(technology);
    const decideLevel = validateLevel(level);
    const decideDate = validateDate(fromDate, toDate);
    const decideSearch = validateSearch(search);

    function validateTech(technology) {
      settechnologyError(false);
      if (technology) {
        settechnologyError(false);
        return true;
      } else {
        settechnologyError(true);
        return false;
      }
    }

    function validateLevel(level) {
      setlevelError(false);
      if (level) {
        setlevelError(false);
        return true;
      } else {
        setlevelError(true);
        return false;
      }
    }
    function validateDate(fromDate, toDate) {
      setwrongDateError(false);
      setfromDateError(false);
      settoDateError(false);
      if (fromDate || toDate) {
        if (fromDate && toDate) {
          if (fromDate) {
            if (fromDate < toDate) {
              return true;
            } else if (fromDate >= toDate) {
              setwrongDateError(true);
              return false;
            }
          }
        } else if (fromDate) {
          settoDateError(true);
        } else {
          setfromDateError(true);
        }
      } else {
        console.log(false);
      }
    }

    function validateSearch(search) {
      setsearchError(false);
      if (decideTech || decideLevel || decideDate) {
        return true;
      } else {
        if (search) {
          if (search.search(/[^a-zA-Z]+/)) {
            setsearchErrorCharacter(false);
            return true;
          } else {
            setsearchErrorCharacter(true);
          }
        } else {
          setsearchErrorCharacter(false);
          setsearchError(true);
          return false;
        }
      }
    }

    if (decideSearch) {
      const navInfocopy = { ...navInfo };
      setnavInfo(navInfocopy);
      console.log(navInfo);
  
      //function call
      searchDataPostToBackend(navInfo)

      props.moveAfterValidation(true);
    } else {
      props.history.push("/");
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
        style={{ boxShadow: "0px 0px 6px #00000029" }}
      >
        <Container fluid>
          <div>
            <Navbar.Brand href="#home">
              <Link to="/upload" href="#" class="navbar-brand">
                <img
                  src={img} alt=""
                  style={{ width: "230px" }}
                  className="position-sticky"
                ></img>
              </Link>
            </Navbar.Brand>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="navbar-light"
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{ marginTop: "23px" }}
          >
            <Nav className="me-auto">
              <Row className="mb-0">
                <Col md={2}>
                  <div className="mb-2">
                    <Form.Select
                      aria-label="Floating label select example"
                      name="technology"
                      value={navInfo.technology}
                      onChange={updateuserData}
                    >
                      <option>Technology</option>
                      <option value="1">ReactJS</option>
                      <option value="2">Angular</option>
                      <option value="3">JavaScript</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col md={2}>
                  <div className="mb-2">
                    <Form.Select
                      aria-label="Default select example"
                      placeholder="Level"
                      name="level"
                      value={navInfo.level}
                      onChange={updateuserData}
                    >
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
                      name="fromDate"
                      placeholder="From Date"
                      value={navInfo.fromDate}
                      onChange={updateuserData}
                      onFocus={(e) => (e.target.type = "date")}
                    />
                    {fromDateError && (
                      <div className="setvalidation">
                        Please select from Date
                      </div>
                    )}
                    {wrongDateError && (
                      <div className="setvalidation">
                        FromDate cannot be greater than or equal to ToDate
                      </div>
                    )}
                  </div>
                </Col>
                <Col md={2}>
                  <div className="mb-2">
                    <Form.Control
                      type="text"
                      name="date-of-birth"
                      name="toDate"
                      placeholder="To Date"
                      value={navInfo.toDate}
                      onChange={updateuserData}
                      onFocus={(e) => (e.target.type = "date")}
                    />
                    {toDateError && (
                      <div className="setvalidation">
                        Please select To Date
                      </div>
                    )}
                    {wrongDateError && (
                      <div className="setvalidation">
                        ToDate should be greater than FromDate
                      </div>
                    )}
                  </div>
                </Col>
                <Col md={3}>
                  <div className="mb-2">
                    <InputGroup>
                      <FormControl
                        type="text"
                        placeholder="Search..."
                        name="search"
                        value={navInfo.search}
                        onChange={updateuserData}
                        style={{ width: "300px" }}
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
                    {searchError && (
                      <div className="setvalidation">
                        Enter questions to search
                      </div>
                    )}
                    {searchErrorCharacter && (
                      <div className="setvalidation">
                        Only characters are allowed
                      </div>
                    )}
                  </div>
                </Col>
                <Col md={1}>
                  <Button
                    variant="outline-light"
                    onClick={search}
                    className="float-end"
                    size="md"
                    style={{ backgroundColor: "#FAA81D" , width:"100%"}}
                  >
                    <Link to="/search" style={{ textDecoration: "none" }}>
                      <span style={{ color: "#FFFFFF" }}>Search</span>
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default withRouter(Newheader);
















//****************************************************************************** */
// import React, { useState } from "react";
// import './Newheader.css';
// import { Link } from "react-router-dom";
// import { withRouter } from "react-router";

// import {
//   Nav,
//   Form,
//   FloatingLabel,
//   Button,
//   Dropdown,
//   Navbar,
//   Container,
//   FormControl,
//   InputGroup,
//   Row,
//   Col,
// } from "react-bootstrap";
// import img from "./technoelevate.jpg";

// function Newheader(props) {
//   const [navInfo, setnavInfo] = useState({
//     technology: "",
//     level: "",
//     fromDate: "",
//     toDate: "",
//     search: "",
//   });

//   const [searchError, setsearchError] = useState(false);
//   const [searchErrorCharacter, setsearchErrorCharacter] = useState(false);
//   const [fromDateError, setfromDateError] = useState(false);
//   const [toDateError, settoDateError] = useState(false);
//   const [wrongDateError, setwrongDateError] = useState(false);
//   const [technologyError, settechnologyError] = useState(false);
//   const [levelError, setlevelError] = useState(false);

//   const updateuserData = (event) => {
//     setnavInfo({
//       ...navInfo,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const search = (event) => {
//     event.preventDefault();
//     const { search, fromDate, toDate, technology, level } = navInfo;
//     const decideTech = validateTech(technology);
//     const decideLevel = validateLevel(level);
//     const decideDate = validateDate(fromDate, toDate);
//     const decideSearch = validateSearch(search);

//     function validateTech(technology) {
//       settechnologyError(false);
//       if (technology) {
//         settechnologyError(false);
//         return true;
//       } else {
//         settechnologyError(true);
//         return false;
//       }
//     }

//     function validateLevel(level) {
//       setlevelError(false);
//       if (level) {
//         setlevelError(false);
//         return true;
//       } else {
//         setlevelError(true);
//         return false;
//       }
//     }
//     function validateDate(fromDate, toDate) {
//       setwrongDateError(false);
//       setfromDateError(false);
//       settoDateError(false);
//       if (fromDate || toDate) {
//         if (fromDate && toDate) {
//           if (fromDate) {
//             if (fromDate < toDate) {
//               return true;
//             } else if (fromDate >= toDate) {
//               setwrongDateError(true);
//               return false;
//             }
//           }
//         } else if (fromDate) {
//           settoDateError(true);
//         } else {
//           setfromDateError(true);
//         }
//       } else {
//         console.log(false);
//       }
//     }

//     function validateSearch(search) {
//       setsearchError(false);
//       if (decideTech || decideLevel || decideDate) {
//         return true;
//       } else {
//         if (search) {
//           if (search.search(/[^a-zA-Z]+/)) {
//             setsearchErrorCharacter(false);
//             return true;
//           } else {
//             setsearchErrorCharacter(true);
//           }
//         } else {
//           setsearchErrorCharacter(false);
//           setsearchError(true);
//           return false;
//         }
//       }
//     }

//     if (decideSearch) {
//       const navInfocopy = { ...navInfo };
//       setnavInfo(navInfocopy);
//       console.log(navInfo);
//       props.moveAfterValidation(true);
//     } else {
//       props.history.push("/");
//     }
//   };

//   return (
//     <div>
//       <Navbar
//         collapseOnSelect
//         expand="lg"
//         bg="white"
//         variant="white"
//         style={{ boxShadow: "0px 0px 6px #00000029" }}
//       >
//         <Container fluid>
//           <div>
//             <Navbar.Brand href="#home">
//               <Link to="/" href="#" class="navbar-brand">
//                 <img
//                   src={img} alt=""
//                   style={{ width: "230px" }}
//                   className="position-sticky"
//                 ></img>
//               </Link>
//             </Navbar.Brand>
//           </div>
//           <Navbar.Toggle
//             aria-controls="responsive-navbar-nav"
//             className="navbar-light"
//           />
//           <Navbar.Collapse
//             id="responsive-navbar-nav"
//             style={{ marginTop: "23px" }}
//           >
//             <Nav className="me-auto">
//               <Row className="mb-0">
//                 <Col md={2}>
//                   <div className="mb-2">
//                     <Form.Select
//                       aria-label="Floating label select example"
//                       name="technology"
//                       value={navInfo.technology}
//                       onChange={updateuserData}
//                     >
//                       <option>Technology</option>
//                       <option value="1">ReactJS</option>
//                       <option value="2">Angular</option>
//                       <option value="3">JavaScript</option>
//                     </Form.Select>
//                   </div>
//                 </Col>
//                 <Col md={2}>
//                   <div className="mb-2">
//                     <Form.Select
//                       aria-label="Default select example"
//                       placeholder="Level"
//                       name="level"
//                       value={navInfo.level}
//                       onChange={updateuserData}
//                     >
//                       <option>Level</option>
//                       <option value="1">Easy</option>
//                       <option value="2">Intermediate</option>
//                       <option value="3">Expert</option>
//                     </Form.Select>
//                   </div>
//                 </Col>
//                 <Col md={2}>
//                   <div className="mb-2">
//                     <Form.Control
//                       type="text"
//                       name="date-of-birth"
//                       name="fromDate"
//                       placeholder="From Date"
//                       value={navInfo.fromDate}
//                       onChange={updateuserData}
//                       onFocus={(e) => (e.target.type = "date")}
//                     />
//                     {fromDateError && (
//                       <div className="setvalidation">
//                         Please select from Date
//                       </div>
//                     )}
//                     {wrongDateError && (
//                       <div className="setvalidation">
//                         FromDate cannot be greater than or equal to ToDate
//                       </div>
//                     )}
//                   </div>
//                 </Col>
//                 <Col md={2}>
//                   <div className="mb-2">
//                     <Form.Control
//                       type="text"
//                       name="date-of-birth"
//                       name="toDate"
//                       placeholder="To Date"
//                       value={navInfo.toDate}
//                       onChange={updateuserData}
//                       onFocus={(e) => (e.target.type = "date")}
//                     />
//                     {toDateError && (
//                       <div className="setvalidation">
//                         Please select To Date
//                       </div>
//                     )}
//                     {wrongDateError && (
//                       <div className="setvalidation">
//                         ToDate should be greater than FromDate
//                       </div>
//                     )}
//                   </div>
//                 </Col>
//                 <Col md={3}>
//                   <div className="mb-2">
//                     <InputGroup>
//                       <FormControl
//                         type="text"
//                         placeholder="Search..."
//                         name="search"
//                         value={navInfo.search}
//                         onChange={updateuserData}
//                         style={{ width: "300px" }}
//                       />

//                       <div
//                         style={{
//                           position: "absolute",
//                           right: "5px",
//                           top: "8px",
//                           zIndex: 9999,
//                         }}
//                       >
//                         <i class="fas fa-search" />
//                       </div>
//                     </InputGroup>
//                     {searchError && (
//                       <div className="setvalidation">
//                         Enter questions to search
//                       </div>
//                     )}
//                     {searchErrorCharacter && (
//                       <div className="setvalidation">
//                         Only characters are allowed
//                       </div>
//                     )}
//                   </div>
//                 </Col>
//                 <Col md={1}>
//                   <Button
//                     variant="outline-light"
//                     onClick={search}
//                     className="float-end"
//                     size="md"
//                     style={{ backgroundColor: "#FAA81D" , width:"100%"}}
//                   >
//                     <Link to="/search" style={{ textDecoration: "none" }}>
//                       <span style={{ color: "#FFFFFF" }}>Search</span>
//                     </Link>
//                   </Button>
//                 </Col>
//               </Row>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// }

// export default withRouter(Newheader);
