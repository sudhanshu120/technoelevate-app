import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import img from "./technoelevate.jpg";


function Login(props) {

    
  const [userInfo, setuserInfo] = useState({
    email:'',
    password:''
  });

  const updateuserData = (event) => {
    setuserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
    console.log(userInfo);
  };


  const login = async () => {
    try{
        const response = await axios.post('http://localhost:2000/users/login', JSON.stringify(userInfo),
        {headers:{"Content-Type":"application/json"}});
        console.log(response.data);
        if(!response.data.error){
            props.history.push('/upload')
        }
       }catch(err){
         console.log(err);
       }
  }


  const register = ()=>{
    props.history.push('/register')
  }

    return (
        <div>
            <img
                  src={img} alt=""
                  style={{ width: "230px" }}
                  className="position-sticky"
                ></img>
                <div class = "container" style={{width:"40%", marginTop:"5%" ,border:"2px solid",padding:"40px",borderRadius:"8px"}}>
                     <h2>Welcome To Technoelevate</h2>

                  <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email"
                    name = "email"
                     value={userInfo.email}
                     onChange={updateuserData}
                    class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp"/>
                   
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password"
                      name ="password"
                     value={userInfo.password}
                     onChange={updateuserData}
                     class="form-control" 
                     id="exampleInputPassword1"/>
                  </div>

                <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>

                  <button type="button" class="btn btn-success "
                   onClick={login} style={{display:"inline-block",width:"100%"}}>
                     Login</button>

                <button type="button" class="btn btn-primary mt-2" 
                    onClick={register} style={{display:"inline-block", width:"100%"}}>
                     Register</button>

                </div>

            </form>
           </div>


        </div>
    )
}

export default withRouter(Login)














/******************************************************************************** */
// import React from 'react'
// import { useState } from "react";
// import axios from 'axios';
// import { withRouter } from 'react-router-dom';

// function Login(props) {

    
//   const [userInfo, setuserInfo] = useState({
//     email:'',
//     password:''
//   });

//   const updateuserData = (event) => {
//     setuserInfo({
//       ...userInfo,
//       [event.target.name]: event.target.value,
//     });
//     console.log(userInfo);
//   };


//   const login = async () => {
//     try{
//         const response = await axios.post('http://localhost:2000/users/login', JSON.stringify(userInfo),
//         {headers:{"Content-Type":"application/json"}});
//         console.log(response.data);
//         if(!response.data.error){
//             props.history.push('/')
//         }
//        }catch(err){
//          console.log(err);
//        }
//   }

//     return (
//         <div>
//              <div class = "conatiner">
//             <form>
//                 <div class="mb-3">
//                     <label for="exampleInputEmail1" class="form-label">Email address</label>
//                     <input type="email" class="form-control" id="inputEmail" name = "email"
//                     value={userInfo.email}
//                     onChange={updateuserData}
//                     aria-describedby="emailHelp" />
//                 </div>
//                 <div class="mb-3">
//                     <label for="exampleInputPassword1" class="form-label">Password</label>
//                     <input type="password" class="form-control" name ="password"
//                     value={userInfo.password}
//                     onChange={updateuserData}
//                     id="inputPassword" />
//                 </div>
//                 {/* <div class="mb-3 form-check">
//                     <input type="checkbox" class="form-check-input" id="exampleCheck1" />
//                     <label class="form-check-label" for="inputCheck">Check me out</label>
//                 </div> */}
//                 <button type="button" class="btn btn-primary"
//                  onClick={login}
//                 >login</button>
//                 </form>
//                 </div>
//         </div>
//     )
// }

// export default withRouter(Login)