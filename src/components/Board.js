import React from 'react';
import Row from './Row.js';
import './Board.css';

export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={i:0};
  }
  changeI(i){ //metoda která nahrazuje setState , muže se předávat dál
    console.log(i);
    this.setState({i:i}); 
  }
  render () {
      return (
        <div>
          <div className="Head">
            Piškvorky
          </div>
          <div style={{margin:"1%"}} className="Board">
            <Row y={0} i={this.state.i} changeI={this.changeI.bind(this)}/>
            <Row y={1} i={this.state.i} changeI={this.changeI.bind(this)}/>
            <Row y={2} i={this.state.i} changeI={this.changeI.bind(this)}/>
          </div>
          <div className="Player">
            <div className="Text">Hráč na řadě:⠀</div>
            <div className="IksOcko">{this.state.i % 2 === 0 ? "X":"O"}</div>
          </div>
        </div>
        );
      }
}