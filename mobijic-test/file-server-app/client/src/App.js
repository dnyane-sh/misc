import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes, Route} from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* <Landing /> */}
          <Routes>
            <Route exact path="/" element={<Landing/>}/>
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />

            {/*  */}
          </Routes>

        </div>
</Router>

        );
  }
}
        export default App;