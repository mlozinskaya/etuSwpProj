import React, { Component } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import ErrorPage from "./components/ErrorPage/ErrorPage";
import HomePage from "./components/HomePage/HomePage";
import ForumPage from "./components/ForumPage/ForumPage";
import "./styles/errorPage.css"
import "./styles/forumPage.css"


class App extends Component {
  render() {
    return (
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/forum" element={<ForumPage/>} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>
        </Router>
    );
  }
}

export default App;
