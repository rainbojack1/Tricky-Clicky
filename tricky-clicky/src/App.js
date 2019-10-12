import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingField from "./components/PlayingField";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    clicked: []
  };
  
  // determine if the image has already been clicked
  imageclicked = id => {
    // push clicked characters into an array
    if (this.state.clicked.includes(id)) {
      alert("You've already chosen this one");
    }
    else {
      this.state.clicked.push(id)
    }

    console.log("Matched: ", this.state.clicked);
  }


  render() {
    return (
      <>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <PlayingField characters={this.state.characters} imageclicked={this.imageclicked}></PlayingField>
      </>
    );
  }
}

export default App;
