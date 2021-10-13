import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import UploadQuestionView from "./components/uploadQuestion/UploadQuestionView";
import SearchView from "./components/search/SearchView";

import Newheader from "./components/navbar/Newheader";
import { useState } from "react";
function App() {


  const [valNavSearch, setvalNavSearch] = useState(false)
  const moveAfterValidation=(isVal)=>{
    setvalNavSearch(isVal)
  }
  return (
    <Router>
      <div>
        {/* <Navbar/> */}
      
        <Newheader moveAfterValidation={moveAfterValidation}/>
      </div>

      <Switch>
          <Route exact path="/">
            <UploadQuestionView/>
          </Route>
          {valNavSearch && <Route exact path="/search">
            <SearchView/>
          </Route>}
      </Switch>
    </Router>
  );
}

export default App;
