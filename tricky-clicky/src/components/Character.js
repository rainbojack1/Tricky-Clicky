import React from 'react';

function Character(props) {
    return (
        <div className="col-md-3 borders">
          <img class="img-responsive" src={props.image} alt={props.name} />
        </div>
    );

}

export default Character;