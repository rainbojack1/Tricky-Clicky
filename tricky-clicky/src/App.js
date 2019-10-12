import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import PlayingField from "./components/PlayingField";
import characters from "./characters.json";

class App extends Component {
  state = {
    characters,
    clicked: [],
    random: []
  };
  
  componentDidMount(){
    this.setState({random: characters});
  }
  // determine if the image has already been clicked
  imageClicked = id => {
    if (this.state.clicked.includes(id)) {
      alert("You've already chosen this one");
    }
    else {
      this.state.clicked.push(id)
    }

    console.log("Matched: ", this.state.clicked);
    this.shuffleImages();
  }

  shuffleImages = () => {
    // make a copy of the characters arr
    const copy = this.state.characters;

    let i = copy.length;
    let j = 0;
    let temp;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    this.setState({random: copy});
  }

  render() {
    return (
      <>
        <Navbar></Navbar>
        <Jumbotron></Jumbotron>
        <PlayingField characters={this.state.random} imageClicked={this.imageClicked}></PlayingField>
      </>
    );
  }
}

export default App;
