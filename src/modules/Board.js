import React from 'react';
import Row from './Row.js';
import './Board.css';

export default class Board extends React.Component {
  render () {
      return (
          <div style={{margin:"1%"}} className="Board">
            <Row /> 
            <Row />
            <Row />
          </div>
        );
      }
}