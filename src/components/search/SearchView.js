
import React, { useState } from 'react'
import { Card,Row,Col,Container } from 'react-bootstrap'
import { withRouter } from 'react-router'
import Pagination from '../pegination/Pagination'


function Search() {

// =========================================================================================================================

// import React, { useState } from 'react';
// import Pagination from 'react-responsive-pagination';



// function Pagin() {
//   const [currentPage, setCurrentPage] = useState(4);

//   const totalPages = 17;
  
                      
//     return (
//         <div>
//       <Pagination
//       current={currentPage}
//       total={totalPages}
//       onPageChange={setCurrentPage}
//     />
//         </div>
//     )
// }







// ==========================================================================================================================
// ============================Main Program===========================================================
// =========================================================================================================================
  const [posts, setposts] = useState([
    {
      question: "1. What is your name?",
      answer: 'Sudhanshu prakash',
      level: 'Easy'
    },
    {
      question: "2. From where you are?",
      answer: 'I am from Kishanganj',
      level: 'Intermediate'
    }, {
      question: "3. Where you want to go?",
      answer: 'I want to go to London',
      level: 'Expert'
    }, {
      question: "4. From which college you did your Engineering?",
      answer: 'I completed my engineering from BCET durgapur',
      level: 'Easy'
    }, {
      question: "5. What was your branch?",
      answer: 'My branch was Information Technology',
      level: 'Intermediate'
    }, {
      question: "6. Which year passout you are?",
      answer: 'I am 2019 passout',
      level: 'Expert'
    }, {
      question: "7. Whic programming laguage you like most?",
      answer: 'I like javaScript most',
      level: 'Easy'
    }, {
      question: "8. Now which language you are learning?",
      answer: 'Now i am learning JSX & React',
      level: 'Intermediate'
    }, {
      question: "9. What you whant to do?",
      answer: 'I want to do coding',
      level: 'Expert'
    }, {
      question: "10.What are the difficulties you are facing?",
      answer: 'I do not have any problem but i want to remove my harddisk and put a SSD ther',
      level: 'Easy'
    }, {
      question: "11.Which animal you like most?",
      answer: 'Cow is my favorite animal',
      level: 'intermediate'
    }, {
      question: "12.Which game you like most?",
      answer: 'I like to play Chess',
      level: 'Expert'
    }, {
      question: "13.Which cellphone you are using?",
      answer: 'Samsung',
      level: 'Easy'
    }, {
      question: "14.Which laptop do you have?",
      answer: 'Dell',
      level: 'Intermediate'
    }, {
      question: "15.What is your favorite cloth brand?",
      answer: 'Raymond is my faviorite cloth brand',
      level: 'Expert'
    }, {
      question: "16.Which place you like most to travel?",
      answer: 'I want mostly visit to my Hometown',
      level: 'Easy'
    }, {
      question: "17.What do you want from yourself?",
      answer: 'I want to make my self proud of me',
      level: 'Expert'
    },{
      question: "18.What is your name?",
      answer: 'Sudhanshu prakash',
      level: 'Easy'
    },
    {
      question: "19.From where you are?",
      answer: 'I am from Kishanganj',
      level: 'Intermediate'
    }, {
      question: "20.Where you want to go?",
      answer: 'I want to go to London',
      level: 'Expert'
    }, {
      question: "21.From which college you did your Engineering?",
      answer: 'I completed my engineering from BCET durgapur',
      level: 'Easy'
    }, {
      question: "22.What was your branch?",
      answer: 'my branch was Information Technology',
      level: 'Intermediate'
    }, {
      question: "23.Which year passout you are?",
      answer: 'I am 2019 passout',
      level: 'Expert'
    }, {
      question: "24.Whic programming laguage you like most?",
      answer: 'I like javaScript most',
      level: 'Easy'
    }, {
      question: "25.Now which language you are learning?",
      answer: 'Now i am learning JSX & React',
      level: 'Intermediate'
    }, {
      question: "26.What you whant to do?",
      answer: 'I want to do coding',
      level: 'Expert'
    }, {
      question: "27.What are the difficulties you are facing?",
      answer: 'I do not have any problem but i want to remove my harddisk and put a SSD ther',
      level: 'Easy'
    }, {
      question: "28.Which animal you like most?",
      answer: ' Cow is my favorite animal',
      level: 'intermediate'
    }, {
      question: "29.Which game you like most?",
      answer: 'I like to play Chess',
      level: 'Expert'
    }, {
      question: "30.Which cellphone you are using?",
      answer: 'Samsung',
      level: 'Easy'
    }, {
      question: "31.Which laptop do you have?",
      answer: 'Dell',
      level: 'Intermediate'
    }, {
      question: "32.What is your favorite cloth brand?",
      answer: 'Raymond is my faviorite cloth brand',
      level: 'Expert'
    }, {
      question: "33.Which place you like most to travel?",
      answer: 'I want mostly visit to my Hometown',
      level: 'Easy'
    }, {
      question: "34.What do you want from yourself?",
      answer: 'I want to make my self proud of me',
      level: 'Expert'
    },


  ])
  const [showPerPage, setshowPerPage] = useState(4)
  const [pagination, setpagination] = useState({
    start: 0,
    end: showPerPage
  })
  const onPaginationChange = (start, end) => {
    setpagination({ start: start, end: end })
  }

    return (

      <div>
      <div class="card text-center">
          <div class="card-body">
          <div className="container">
         <div className='row'>
          {posts.slice(pagination.start, pagination.end).map((post) => (
              <div className='col-md-12' key={post.question}>
                <div className='card'>
                  <div className='card-answer' style={{textAlign:'justify'}}>
                    {/* <h4>{post.question, post.answer}</h4> */}
                    <Container>
                      <Row>
                     <Col md={12}>
                     <b> <p className="ques">{post.question}</p></b>
                    <p className="ans">{post.answer}</p>
                    </Col>
                    </Row>
                    </Container>
                  </div>
                  
                </div>
              </div>
            )
            )}
          </div>
    
        </div>


          </div>


      </div>
      <div class="card-footer text-muted" style={{position:'fixed',
      left:'0',
    bottom:'0',
    width:'100%',
  boxShadow:"0px 0px 6px #00000029",
  color:'white',
  textAlign:'center',
  // height:'100px',


}}>

<Pagination showPerPage={showPerPage}
            onPaginationChange={onPaginationChange}
            total={posts.length}  />
</div>

  </div>
    )
// =================================================================================================================================
// ================================================================================================================================




}

export default withRouter(Search)




// --------------------------------------------------------------------------------------------------------------
