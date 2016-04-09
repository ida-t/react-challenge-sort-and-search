import React , { Component } from 'react';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="btn btn-default sort-button" id = {this.props.id}>
          <i className={'icon fa ' + this.props.faIconClassName} ></i>
          <span>{this.props.name}</span>
      </button>
    )
  }

}
