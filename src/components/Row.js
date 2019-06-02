import React from 'react';
import Column from './Column.js';
import './Row.css';

export default class Row extends React.Component {
    render () {
        return (
            <div className="Row">
              <Column text="" y={this.props.y} x={0} i={this.props.i} changeI={this.props.changeI}/>
              <Column text="" y={this.props.y} x={1} i={this.props.i} changeI={this.props.changeI}/>
              <Column text="" y={this.props.y} x={2} i={this.props.i} changeI={this.props.changeI}/>
            </div>
          );
        }
}
