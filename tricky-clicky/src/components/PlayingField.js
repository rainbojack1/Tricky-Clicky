import React, { Component } from "react";
// import characters from "../characters.json";
import Character from "./Character.js";

class PlayingField extends Component {


    render() {
        return (
            <div className="container">
            <div className="row">
                {this.props.characters.map(character => (
                    <div className="col-md-3 borders" onClick={() => this.props.imageclicked(character.id)}>
                    <Character
                    name={character.name}
                    image={character.image}
                    selected={character.selected}
                    id={character.id}
                    />
                    </div>
                ))}  
            </div>
            </div>
        );
    }
}

export default PlayingField;
