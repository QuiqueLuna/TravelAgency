import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import Purchases from "./components/Purchases";
import History from "./components/History";
import Login from "./components/Login";
import Register from "./components/Register";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Pay from "./components/Pay";

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={Banner}/>
      <div className="container p-4">
      <Route path="/" exact component={Main}/>
      <Route path="/History" component={History}/>
      <Route path="/Purchases" component={Purchases}/>
      <Route path="/Login" component={Login}/>
      <Route path="/Register" component={Register}/>
      <Route path="/Pay" component={Pay}/>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
