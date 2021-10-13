import React from "react";
import { Link } from "react-router-dom";
import tech from './technoelevate.jpg'


function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light white" style={{border:'2px solid lightgray'}}>
    <div class="container-fluid">
    <Link to="/" href="#" class="navbar-brand"><img src={tech} alt="" ></img></Link>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{paddingLeft :'5px',border:' 0.5px solid #707070',borderRadius:'6px',opacity:'1',background: '#FFFFFF 0% 0% no-repeat padding-box'}}>
          Technology
          </a>
          <ul class="nav-link active" class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">ReactJS</a></li>
            <li><a class="dropdown-item" href="#">Angular</a></li>
            <li><a class="dropdown-item" href="#">JavaScript</a></li>

           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{marginLeft :'5px',border:' 0.5px solid #707070',borderRadius:'6px',opacity:'1',background: '#FFFFFF 0% 0% no-repeat padding-box'}}>
            Level
          </a>
          <ul class="nav-link active" class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Easy</a></li>
            <li><a class="dropdown-item" href="#">Intermediate</a></li>
            <li><a class="dropdown-item" href="#">Expert</a></li>
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"  style={{marginLeft :'5px',border:' 0.5px solid #707070',borderRadius:'6px',opacity:'1',background: '#FFFFFF 0% 0% no-repeat padding-box'}}>From Date</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active " href="#"  style={{marginLeft :'5px',border:' 0.5px solid #707070',borderRadius:'6px',opacity:'1',background: '#FFFFFF 0% 0% no-repeat padding-box'}}>To Date</a>
        </li>
        
      </ul>
      <form class="d-flex">
     

        <input class="form-control me-2" type="search" placeholder="Search question" aria-label="Search" style ={{marginLeft :'5px',opacity:'1'}}/>
      
      
      
      
       
        <button class="btn btn-outline-success" type="submit" style={{marginLeft :'5px',background:'#FAA81D' ,opacity:'1' , borderRadius: '6px' }}>
          <Link to="/search" style={{textDecoration:'none' ,color:'white'}}>
          Search
          </Link>
          </button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
