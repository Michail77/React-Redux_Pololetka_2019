import React from 'react';
import Column from './Column.js';
import './Row.css';

export default class Row extends React.Component {
    render () {
        return (
            <div className="Row">
              <Column text=""/>
              <Column text=""/>
              <Column text=""/>
            </div>
          );
        }
}
