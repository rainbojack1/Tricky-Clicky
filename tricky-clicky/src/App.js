import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingField from "./components/PlayingField";


class App extends Component {
  // state = {
  //   characters
  // };
  
  render() {
    return (
      <>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <PlayingField></PlayingField>
      </>
    );
  }
}

export default App;
