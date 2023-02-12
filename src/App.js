import React, { Component } from 'react';
import "./App.css";
import About from "./About";
import News from "./News";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>

        <NavLink className="vepa" to="/About">About</NavLink>
        <br /><br />
        <NavLink className="vepa" to="/News">News</NavLink>
        
        <Routes>
          <Route path='/About' element={<About />} />
          <Route path='/News' element={<News />} />
        </Routes>
      </div>
    );
  }
}

export default App;
