import React, { Component } from 'react';
import Button from './Button'

export default class ToolBar extends Component {
      render(){
        return (
          <div>
            <Button name='  Sort by name' faIconClassName = 'fa-sort-alpha-asc' id = 'sort-name-button'/>
            <Button name='  Sort by age' faIconClassName = 'fa-sort-numeric-desc' id = 'sort-age-button'/>
          </div>
        )
      }
}

export default ToolBar;
