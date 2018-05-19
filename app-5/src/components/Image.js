import React from 'react';


export default function Image (props) {
    return (
      <div className="App">
       <img src={props.image} alt="Cthulhu"/>
      </div>
    );
  }
