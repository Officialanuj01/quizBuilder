import React from "react";
import './App.css'
import { Link , Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import Begain from "./Component/Begain";
import Result from "./Component/Result";

class Quiz extends React.Component {

  render() {

    return (
      <>
              <Routes>
                <Route path="/Main" element= {<Main/>}></Route>
                <Route path="/" element = {<Begain/>}></Route>
              </Routes>
      </>
    )
  }
}

export default Quiz;