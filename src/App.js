import React, { Component } from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
// import Rules from "./components/Rules";
// import Scores from './components/Scores'
// import Comments from "./components/Comments"
// import Cookies from "./components/Cookies";


export default class App extends Component {


  render() {
    return (
      <Wrapper>
        <Jumbotron />
        {/* <Rules />
      <Scores />
      <Comments />
      <Cookies /> */}
      </Wrapper>
    )
  }
}
