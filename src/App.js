import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UploadQuestionView from "./components/uploadQuestion/UploadQuestionView";
import SearchView from "./components/search/SearchView";

import Newheader from "./components/navbar/Newheader";
import { useState } from "react";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
function App() {


  const [valNavSearch, setvalNavSearch] = useState(false)
  const [sendData, setsendData] = useState("")
  const moveAfterValidation=(isVal)=>{
    setvalNavSearch(isVal)
  }

  const getTheDataFormNewHeader = (data)=>{
    console.log(data);
    setsendData(data)
  }
  return (
    <Router>
     
      <Switch>

      <Route exact path="/">
           <Login />
          </Route>

      <Route exact path="/register">
           <Register />
          </Route>

          
          <Route exact path="/upload">
            <Newheader getTheDataFormNewHeader={getTheDataFormNewHeader} moveAfterValidation={moveAfterValidation}/>
            <UploadQuestionView/>
          </Route>
          {valNavSearch && <Route exact path="/search">
              <Newheader getTheDataFormNewHeader={getTheDataFormNewHeader} moveAfterValidation={moveAfterValidation}/>
            <SearchView sendData={sendData}/>
          </Route>}
      </Switch>
    </Router>


    // <Router>
    //   <div>  
    //     <Newheader getTheDataFormNewHeader={getTheDataFormNewHeader} moveAfterValidation={moveAfterValidation}/>
    //   </div>

    //   <Switch>

    //   <Route exact path="/register">
    //        <Register />
    //       </Route>

    //       <Route exact path="/login">
    //        <Login />
    //       </Route>


    //       <Route exact path="/">
    //         <UploadQuestionView/>
    //       </Route>
    //       {valNavSearch && <Route exact path="/search">
    //         <SearchView sendData={sendData}/>
    //       </Route>}
    //   </Switch>
    // </Router>
  );
}

export default App;

























//********************************************************************************** */
// import Navbar from "./components/navbar/Navbar";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./App.css";
// import UploadQuestionView from "./components/uploadQuestion/UploadQuestionView";
// import SearchView from "./components/search/SearchView";

// import Newheader from "./components/navbar/Newheader";
// import { useState } from "react";
// import Register from "./components/register/Register";
// import Login from "./components/login/Login";
// function App() {


//   const [valNavSearch, setvalNavSearch] = useState(false)
//   const moveAfterValidation=(isVal)=>{
//     setvalNavSearch(isVal)
//   }
//   return (
//     <Router>
//       <div>
//         {/* <Navbar/> */}
      
//         <Newheader moveAfterValidation={moveAfterValidation}/>
//       </div>

//       <Switch>

      
//       <Route exact path="/register">
//            <Register />
//           </Route>

          
//           <Route exact path="/login">
//             <Login />
//           </Route>

//           <Route exact path="/">
//             <UploadQuestionView/>
//           </Route>
//           {valNavSearch && <Route exact path="/search">
//             <SearchView/>
//           </Route>}
//       </Switch>
//     </Router>
//   );
// }

// export default App;
