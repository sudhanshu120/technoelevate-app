import React from 'react'
import { useState } from "react";
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function Register(props) {

    const [userInfo, setuserInfo] = useState({
        fname:'',
        lname:'',
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
    

  const saveData = async (userInfo) => {
    try{
     const response = await axios.post('http://localhost:2000/users/register', userInfo);
     console.log(response.data);
    }catch(err){
      console.log(err);
    }
   }

   const login = ()=>{
     props.history.push('/')
   }

    return (
        <div>
              <div class = "container" style={{width:"50%", marginTop:"10%" ,border:"2px solid",padding:"20px"}}>
                     <h2>Welcome To Technoelevate</h2>

            <form>
            <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">First Name</label>
            <input type="text" class="form-control" name ="fname" 
            value={userInfo.fname}
            onChange={updateuserData}
            aria-describedby="emailHelp" />
           
        </div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Last Name</label>
            <input type="text" class="form-control" name="lname"
            value={userInfo.lname}
            onChange={updateuserData}
            aria-describedby="emailHelp" />
            
        </div>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input type="email" class="form-control" name = "email"
            value={userInfo.email}
            onChange={updateuserData}
            aria-describedby="emailHelp" />
           
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control"
            value={userInfo.password}
            onChange={updateuserData}
            name ="password" />
        </div>
       
        <button type="button" class="btn btn-success"
        onClick={()=>{saveData(userInfo)}}
        >Submit</button>

        <button type="button" class="btn btn-primary float-end"
        onClick={login}
        >Login</button>
        </form>
        </div>
        </div>
    )
}

export default withRouter(Register)










/******************************************************************************* */
// import React from 'react'
// import { useState } from "react";
// import axios from 'axios';

// function Register() {

//     const [userInfo, setuserInfo] = useState({
//         fname:'',
//         lname:'',
//         email:'',
//         password:''
//       });
    
//       const updateuserData = (event) => {
//         setuserInfo({
//           ...userInfo,
//           [event.target.name]: event.target.value,
//         });
//         console.log(userInfo);
//       };
    

//   const saveData = async (userInfo) => {
//     try{
//      const response = await axios.post('http://localhost:2000/users/register', userInfo);
//      console.log(response.data);
//     }catch(err){
//       console.log(err);
//     }
//    }

//     return (
//         <div>
//             <div class = "conatiner">
//             <form>
//             <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">First Name</label>
//             <input type="text" class="form-control" name ="fname" 
//             value={userInfo.fname}
//             onChange={updateuserData}
//             aria-describedby="emailHelp" />
           
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">Last Name</label>
//             <input type="text" class="form-control" name="lname"
//             value={userInfo.lname}
//             onChange={updateuserData}
//             aria-describedby="emailHelp" />
            
//         </div>

//         <div class="mb-3">
//             <label for="exampleInputEmail1" class="form-label">Email</label>
//             <input type="email" class="form-control" name = "email"
//             value={userInfo.email}
//             onChange={updateuserData}
//             aria-describedby="emailHelp" />
           
//         </div>
//         <div class="mb-3">
//             <label for="exampleInputPassword1" class="form-label">Password</label>
//             <input type="password" class="form-control"
//             value={userInfo.password}
//             onChange={updateuserData}
//             name ="password" />
//         </div>
//         {/* <div class="mb-3 form-check">
//             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//             <label class="form-check-label" for="exampleCheck1">Check me out</label>
//         </div> */}
//         <button type="submit" class="btn btn-primary"
//         onClick={()=>{saveData(userInfo)}}
//         >Submit</button>
//         </form>
//         </div>
//         </div>
//     )
// }

// export default Register