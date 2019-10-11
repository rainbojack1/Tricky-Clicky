import React, { Component } from "react";
import characters from "../characters.json";
import Character from "./Character.js";

class PlayingField extends Component {

    state = {
        characters
      };

    render() {
  return (
    <div className="container">
      <div className="row">
        {this.state.characters.map(character => (
            <Character
            name={character.name}
            image={character.image}
            />
        ))}  
      </div>
      {/* <div className="row">
        
      </div>
      <div className="row">
        
      </div> */}
    </div>
  );
}
}

export default PlayingField;
