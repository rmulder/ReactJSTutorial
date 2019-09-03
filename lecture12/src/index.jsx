import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  return (
    <div className="container">Hello world!</div>
  )
}

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);