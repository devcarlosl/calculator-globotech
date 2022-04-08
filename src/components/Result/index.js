import React from 'react';

function Result(props) {
  return <h1 {...props}>{props.children}</h1>
}

export default Result;
