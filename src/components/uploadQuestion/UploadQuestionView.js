import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  FloatingLabel,
  Form,
  Container,
  Button,
  Modal,
} from "react-bootstrap";
import DeleteConfirmation from "../deleteConfirm/DeleteConfirm";
import SubmitModal from "./SubmitModal";

import "./UploadQuestionView.css";



function Technoelevate() {
  const [deleteIndex, setdeleteIndex] = useState()
  const [isShowDelete, setisShowDelete] = useState(false)
  const [isShowSubmitModal, setisShowSubmitModal] = useState(false)


  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
    questions: [],
  });

  const [questions, setQuestions] = useState([
    {
      question: "",
      answer: "",
      difficultyLevel: "",
    },
  ]);

  const [firstNameError, setfirstNameError] = useState(false);
  const [firstNameErrorCharacter, setfirstNameErrorCharacter] = useState(false);

  const [departmentError, setdepartmentError] = useState(false);
  const [departmentErrorCharacter, setdepartmentErrorCharacter] = useState(false);

  const [clientNameError, setclientNameError] = useState(false);
  const [clientNameErrorCharacter, setclientNameErrorCharacter] = useState(false);

  const [technologyError, settechnologyError] = useState(false);
  const [technologyErrorCharacter, settechnologyErrorCharacter] = useState(false);

  
  const [questionError, setquestionError] = useState(false);


  const [difficultyLevelError, setdifficultyLevelError] = useState(false);

  const [Arrayquestions, setArrayquestions] = useState([]);

  const [taskdelete, updateDelete] = React.useState(true);

  const updateuserData = (event) => {
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value,
    });
  };

  const updatequestionData = (event, index) => {
    const questionsCopy = [...questions];
    const questionsCopyObjAtIndex = {
      ...questions[index],
      [event.target.name]: event.target.value,
    };
    questionsCopy[index] = { ...questionsCopyObjAtIndex };
    setQuestions(questionsCopy);
  };



  const saveData = (event) => {
    event.preventDefault();
    const { candidateName, department, clientName, technology } = primaryInfo;
   

    const validateQsAndDefL=()=>{
      let count=0
    questions.forEach((qObj)=>{
      
      if(!(qObj.question || qObj.difficultyLevel)){
        count++
      }})
      if(count>0){
        setquestionError(true);
        setdifficultyLevelError(true);
        return false
      }
      setquestionError(false);
      setdifficultyLevelError(false);
      return true
    }
   const decideQueAndDeff = validateQsAndDefL()
    const decideCandidateName = validateCandidateName(candidateName)
    const decidedepartment = validateDepartment(department)
    const decideClientName = validateCilentName(clientName)
    const decideTechnology = validateTechnology(technology)


    function validateCandidateName(candidateName){
    if (candidateName) {
      setfirstNameError(false);
      if (candidateName.search(/[^a-zA-Z]+/)) {
        setfirstNameErrorCharacter(false);
        return true
      } else {
        setfirstNameErrorCharacter(true);
      }
    } else {
      setfirstNameErrorCharacter(false);
      setfirstNameError(true);
    }
    return false
  }

  function validateDepartment(department){
    if (department) {
      setdepartmentError(false);
      if (department.search(/[^a-zA-Z]+/)) {
        setdepartmentErrorCharacter(false);
        return true
      } else {
        setdepartmentErrorCharacter(true);
      }
    } else {
      setdepartmentErrorCharacter(false);
      setdepartmentError(true);
    }
    return false
  }

    function validateCilentName(clientName){
    if (clientName) {
      setclientNameError(false);
      if (clientName.search(/[^a-zA-Z]+/)) {
        setclientNameErrorCharacter(false);
        return true
      } else {
        setclientNameErrorCharacter(true);
      }
    } else {
      setclientNameErrorCharacter(false);
      setclientNameError(true);
    }
    return false
  }

  function validateTechnology(technology){
    if (technology) {
      settechnologyError(false);
      if (technology.search(/[^a-zA-Z]+/)) {
        settechnologyErrorCharacter(false);
        return true
      } else {
        settechnologyErrorCharacter(true);
      }
    } else {
      settechnologyErrorCharacter(false);
      settechnologyError(true);
    }
    return false
  }

    
    // -------------------------------------------------------------------------------------------------
    if(decideCandidateName && decidedepartment && decideClientName && decideTechnology && decideQueAndDeff){
      const finalQuestionsCopy = [...questions];
      primaryInfo.questions = finalQuestionsCopy;
  
      console.log("Final Object -", primaryInfo);
      setisShowSubmitModal(true)
    }
   
  };

  const addAns = (event, index) => {
    event.preventDefault();
    const question= questions[index].question

    const difficultyLevel = questions[index].question
    const decidedque = validateque(question);
    const decideddiff = validatedifficultylevel(difficultyLevel);

    function validateque(question) {
      if (question) {
        setquestionError(false);
        return true;
      } else {
        setquestionError(true);
      }
      return false
    }

    function validatedifficultylevel(difficultyLevel) {
      if (difficultyLevel) {
        setdifficultyLevelError(false);
        return true
      } else {
        setdifficultyLevelError(true);
      }
      return false
    }

    if (decidedque & decideddiff) {
      const questionsCopy = [...questions];
      const emptyObject = {
        question: "",
        answer: "",
        difficultyLevel: "",
      };
      questionsCopy.push(emptyObject);
      setQuestions(questionsCopy);
    }
    else{
      console.log('hii');
    }
  };

  const isLast = (index) => {
    return index === questions.length - 1;
  };




  const deleteGetDataIndex = (index) => {
    const questionscopy = [...questions];

    questionscopy.splice(index, 1);
    setQuestions(questionscopy);
};
const sendIndexOfDelete = (index) => {
  setdeleteIndex(index)
}


// --------------------------------------------------------------------------------
  return (
    <div className="mainDiv">
      <Container className="container1">
        <Row>
          <Col md={12}>
            <div className="header">Upload Your Questions</div>
          </Col>
        </Row>
        <br />
        <Container>
          <Row className="g-3">
            <Col md={3} className="InputField1">
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Candidate Name"
              >
                <Form.Control
                  type="text"
                  name="candidateName"
                  className="mb-1"
                  value={primaryInfo.candidateName}
                  onChange={updateuserData}
                  placeholder="Enter Your Name"
                />
              </FloatingLabel>
              {firstNameError && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please enter your name </div>
              )}
              {firstNameErrorCharacter && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Only characters are allowed</div>
              )}
            </Col>

            <Col md={3} className="InputField2">
              <FloatingLabel controlId="floatingSelectGrid" label="Department">
                <Form.Select
                  aria-label="Floating label select example"
                  name="department"
                  className="mb-1"
                  value={primaryInfo.department}
                  onChange={updateuserData}
                >
                  <option>Select Department</option>
                  <option value="Tech Team">Tech Team</option>
                  <option value="R&D Team">R&D Team</option>
                  <option value="Engineer">Engineer</option>
                </Form.Select>
              </FloatingLabel>
              {departmentError && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please select the department </div>
              )}
              {departmentErrorCharacter && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Only characters are allowed</div>
              )}
            </Col>
            <Col md={3} className="InputField3">
              <FloatingLabel controlId="floatingInputGrid" label="Client Name">
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  name="clientName"
                  className="mb-1"
                  value={primaryInfo.clientName}
                  onChange={updateuserData}
                />
              </FloatingLabel>
              {clientNameError && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please enter client name </div>
              )}
              {clientNameErrorCharacter && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Only characters are allowed</div>
              )}
            </Col>

            <Col md={3} className="InputField5">
              <FloatingLabel controlId="floatingSelectGrid" label="Technology">
                <Form.Select
                  aria-label="Floating label select example"
                  name="technology"
                  className="mb-1"
                  value={primaryInfo.technology}
                  onChange={updateuserData}
                >
                  <option>Select Technology</option>
                  <option value="ReactJs">ReactJs</option>
                  <option value="VueJs">VueJs</option>
                  <option value="Angular">Angular</option>
                  <option value="avaScript">JavaScript</option>
                  <option value="MongoDB">MongoDB</option>
                </Form.Select>
              </FloatingLabel>
              {technologyError && (
                <div className="mb-2" style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please select technology </div>
              )}
              {technologyErrorCharacter && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Only characters are allowed</div>
              )}
            </Col>
          </Row>
        </Container>
        
        {questions.map((value, index) => {
          return (
            <div key={index}>
              <Container>
                <Row className="g-3">
                  <Col md={9} className="questionbox">
                    <FloatingLabel
                      controlId="floatingTextarea"
                      className="questionbox mt-3"
                      label="Question"
                    >
                      <Form.Control
                        as="textarea"
                        className="mb-1"
                        name="question"
                        value={questions[index].question}
                        onChange={(event) => updatequestionData(event, index)}
                        placeholder="Leave a comment here"
                        style={{ height: "60px" }}
                      />
                    </FloatingLabel>
                    {/* {questions[index].question?'':setquestionError} */}
                    {questionError && (
                <div className="mb-2" style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please enter question </div>
              )}
                  </Col>

                  <Col md={3}>
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Difficulty Level"
                      className="mt-3"
                    >
                      <Form.Select
                        aria-label="Floating label select example"
                        className="mb-1"
                        name="difficultyLeve"
                        value={questions[index].difficultyLevel}
                        onChange={(event) => updatequestionData(event, index)}
                      >
                        <option>Select Level</option>
                        <option value="Easy">Easy</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Expert">Expert</option>
                      </Form.Select>
                    </FloatingLabel>
                  
                    {difficultyLevelError && (
                <div style={{color:'red',fontSize:'15px',paddingLeft:'5px'}}>Please select difficultyLevel </div>
              )}
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row className="g-3">
                  <Col md={9}>
                    <FloatingLabel
                      controlId="floatingTextarea"
                      className="answerbox mt-4"
                      label="Answer"
                    >
                      <Form.Control
                        as="textarea"
                        className="mb-2"
                        placeholder="Leave a comment here"
                        name="answer"
                        onChange={(event) => updatequestionData(event, index)}
                        value={questions[index].answer}
                        style={{ height: "150px" }}
                      />
                    </FloatingLabel>
                  </Col>

                  <Col>
                    <Button
                      size="md"
                      id="btn-text-add"
                      className="primary float-end"
                      onClick={
                        isLast(index)
                          ? (event) => {
                              addAns(event, index);
                            }
                          :() =>{
                            
                            sendIndexOfDelete(index);
                            { setisShowDelete(true) }
                            
                            
                            }
                      }
                      active
                    >
                      {isLast(index) ? (
                        <button className="btn-icon-plus">
                          <i className="fas fa-plus" />
                        </button>
                      ) : (
                        <button className="btn-icon-plus">
                          <i
                            className="fas fa-trash"
                            style={{ color: "white" }}
                          />
                        </button>
                      )}

                      {index === questions.length - 1 ? "Add New" : "Delete"}
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
          );
        })}
    
        <Container>
          <Row>
            <Col md={12} className="submitbtn">
              <Button
                className="btn float-end"
                style={{
                  color: "white",
                  backgroundColor: "#FAA81D",
                  border: "none",
                }}
                onClick={(event)=>{saveData(event)}}
                active
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>




{/* ------------------------------------------------------------------ */}
{isShowDelete && <DeleteConfirmation setisShowDelete={setisShowDelete} deleteIndex={deleteIndex} deleteGetDataIndex={deleteGetDataIndex} />}
  
  
{isShowSubmitModal && <SubmitModal setisShowSubmitModal={setisShowSubmitModal} />}
{/* ----------------------------------------------------------------- */}

    </div>



  );
}

export default Technoelevate;
