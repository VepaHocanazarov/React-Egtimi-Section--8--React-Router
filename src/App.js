import React, { Component } from 'react';
import "./App.css";
import './index.css';
import { Outlet }from "react-router-dom"
import About from "./About";
import News from "./News";
import { BrowserRouter, Link, NavLink, Route, Routes, } from 'react-router-dom';

const Profile = () => {
  return (<h1>Profile: Vepa Hocanazarov</h1>)
};

const Error = () => {
  return (<h1>404 Not Found</h1>)
}

class App extends Component {

  state = {
    loggedin: false
  };

  clickbutton = () => {
    this.setState(prevState => ({
      loggedin: !prevState.loggedin
    }))
  };

  render() {
    return (
      <div>
        <NavLink className="vepa" to="/About">About</NavLink>
        <br /><br />
        <NavLink className="vepa" to="/News">News</NavLink>
        <br /><br />
        <NavLink className="vepa" to="/Profile">Profile</NavLink>
        <br /><br />
        <NavLink className="vepa" to="/Error">Error</NavLink>


        <br /><br />

        <input type="button" onClick={this.clickbutton} value={this.state.loggedin ? "Log Out" : "Login"} />

           
         
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/News' element={<News />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path="/Error" element={<Error/>}/>
          
        </Routes>
        
      </div>
    );
  }
}

export default App;
