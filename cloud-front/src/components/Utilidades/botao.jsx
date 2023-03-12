import React from 'react';

function Botton(props) {
  return (
    <button onClick={props.onClick}>
      {props.texto}
    </button>
  );
}

export default Botton;

