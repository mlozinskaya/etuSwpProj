import React, { Component } from "react";
import Header2 from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


class App extends Component {
  render() {
    return (
        <Router>
          <Header2/>
          <Routes>
            <Route exact path="/header" element={<Header2/>} />
          </Routes>
        </Router>
    );
  }
}

export default App;
