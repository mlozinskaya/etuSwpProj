import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorPage from "./components/ErrorPage/ErrorPage";


class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
          <Routes>
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
    );
  }
}

export default App;
