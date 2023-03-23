import React from "react";
import {Link} from 'react-router-dom';

function Navigation(){
    /*if(props.location.state){
      const {name, email}= props.location.state
      console.log(name, email)
    }*/
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <Link className="navbar-brand" to="/"><img src='/images/LogoRana.png' alt='Rana' height="30rem"></img></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/Purchases">Shopping Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/History">History</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navigation;