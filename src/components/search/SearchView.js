
import React, { useState } from 'react'

import { withRouter } from 'react-router'

import Pagination1 from '../pegination/Pagination1';

// ==================================================
import "bootstrap/dist/css/bootstrap.min.css";
import './Search.css'
// =====================================================
import Posts from '../posts/Posts';

import { useEffect } from 'react';
import axios from 'axios';
function Search({sendData}) {

  console.log("search view = search data =",sendData);

  
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  console.log("post =" ,posts);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      // const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      // const res = await axios.get('http://localhost:2000/questions/all-question')
     
      // const theReqArray1=await Object.values(res.data)[2]
      // console.log("value 1",theReqArray1);

      // const theReqArray=Object.values(await Object.values(theReqArray1))
      // console.log("value 2",theReqArray);

      try{
           const response = await axios.post('http://localhost:2000/questions/search', sendData)
            
           console.log("response data = ",response.data);
           const theReqArray1=await Object.values(response.data)[2]
           console.log("value 1",theReqArray1);
           setPosts(theReqArray1)
          
          }catch(err){
            console.log(err);
          }
      
      setLoading(false)
    }

    fetchPosts()
  }, [sendData])

  if (loading && posts.length === 0) {
    return <h2>Loading...</h2>
  }
  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const howManyPages = Math.ceil(posts.length/postsPerPage)
  
  return (
    <div>
     {/* <Posts posts={currentPosts}/>  */}
     <Posts posts={posts}/> 

      <Pagination1 pages = {howManyPages} setCurrentPage={setCurrentPage}/>
    </div>
  );


}

export default withRouter(Search)
















// *******************************************************************************************************************
// import React, { useState } from 'react'
// import { Card,Row,Col,Container } from 'react-bootstrap'
// import { withRouter } from 'react-router'
// // import Pagination from '../pegination/Pagination'
// import Pagination1 from '../pegination/Pagination1';

// // ==================================================
// import "bootstrap/dist/css/bootstrap.min.css";
// import './Search.css'
// import ReactPaginate from "react-paginate";
// // =====================================================
// import Posts from '../posts/Posts';

// import { useEffect } from 'react';
// import axios from 'axios';
// function Search() {

//   const [posts, setposts] = useState([
//     {
//       question: "Question 1",
//       answer: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost',
//       level: 'Easy'
//     },
//     {
//       question: "Question 2",
//       answer: 'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost',
//       level: 'Intermediate'
//     }
//   ])
//   const [showPerPage, setshowPerPage] = useState(4)
//   const [pagination, setpagination] = useState({
//     start: 0,
//     end: showPerPage
//   })
//   const onPaginationChange = (start, end) => {
//     setpagination({ start: start, end: end })
//   }

//     return (

//       <div>
//       <Row>
//              {posts.slice(pagination.start, pagination.end).map((post) => (
//               <div className='col-md-12' key={post.question}>
//                 <div className='card'>
//                   <div className='card-answer' style={{textAlign:'justify'}}>
//                     <Container>
//                       <Row>
//                        <span className="ques">{post.question}</span>
//                        <span className="ans">{post.answer}</span>
//                      </Row>
//                     </Container>
//                   </div>
//                </div>
//               </div>
//             )
//             )}
        
//       </Row>
//       <div class="card-footer text-muted" style={{position:'fixed',
//       left:'0',
//       bottom:'0',
//       width:'100%',
//       boxShadow:"0px 0px 6px #00000029",
//      color:'white',
//      textAlign:'center',
//      height:'50px',
   
//     }}>

// {/* <Pagination showPerPage={showPerPage}
//             onPaginationChange={onPaginationChange}
//             total={posts.length}
//             setshowPerPage={setshowPerPage}
//             /> */}
//             <Pagination1 />
// </div>

//   </div>
//     )
// =================================================================================================================================
// ================================================================================================================================

  //Get current posts
  

//   const [posts, setPosts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1)
//   const [postsPerPage] = useState(9)

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true)
//       const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
//       setPosts(res.data)
//       setLoading(false)
//     }

//     fetchPosts()
//   }, [])

//   if (loading && posts.length === 0) {
//     return <h2>Loading...</h2>
//   }
//   //Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
//   const howManyPages = Math.ceil(posts.length/postsPerPage)
  
//   return (
//     <div>
//      <Posts posts={currentPosts}/> 
//       <Pagination1 pages = {howManyPages} setCurrentPage={setCurrentPage}/>
//     </div>
//   );


// }

// export default withRouter(Search)




// --------------------------------------------------------------------------------------------------------------
