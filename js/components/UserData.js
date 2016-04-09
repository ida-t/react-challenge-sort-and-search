import React, { Component } from 'react';

export default class UserData extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a link='' className = 'user-data user-data_visible'>
          <div className = 'user-data__img'>
              <img src = {'images/' + this.props.image + '.svg'} />
          </div>
          <div className = 'user-data__name'>{this.props.name}</div>
          <div className = 'user-data__age'>{this.props.age}</div>
          <div className = 'user-data__phone'>{'8 ' + this.props.phone}</div>
      </a>
    )
  }

}
