import React from 'react'
import './Post.css'
import {Container, Row} from 'react-bootstrap'
function Posts({posts}) {
  console.log(posts);
  return (
    <Container fluid>
        {
            posts.map((post,index)=>{
    
              return post.questions.map((val,id)=>{
                 return <Row className="myRow" style={{borderBottom:'1px solid #00000029'}}>
                  {/* <b><span key={index} className="Ques">{post.id} {post.title}</span></b>
                  <p key={index} className="Answ" >{post.body}</p> */}

                <b><span key={id} className="Ques"> {val.question}</span></b>
                                  <p key={id} className="Answ" >{val.answer}</p>
                                
                </Row>
              })
              
                      
            })
        }
    </Container>
  )
}

export default Posts







///////////////////////////////***************************************************************************************** */
// import React from 'react'
// import './Post.css'
// import {Container, Row} from 'react-bootstrap'
// function Posts({posts}) {
//   return (
//   <Container fluid>
//       {posts.map((post,index)=>{
//          return (
//             <Row className="myRow" style={{borderBottom:'1px solid #00000029'}}>
//               <b><span key={index} className="Ques">{post.id} {post.title}</span></b>
//               <p key={index} className="Answ" >{post.body}</p>
//            </Row>
//           )
//                 })}
//                 </Container>
//   )
// }

// export default Posts
