import React, { Component } from 'react';

export default class ActiveUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'active-user'>
        <div className = 'active-user__photo'>
          <img src = {'images/' + this.props.image + '.svg'} />
        </div>
        <div className = 'active-user__name border-bottom '>
          {this.props.name}
        </div>
        <div className = 'active-user__info border-bottom '>
          <div className = 'active-user__info-text'>Age:</div>
          <div className = 'active-user__info-text'>{this.props.age}</div>
        </div>
        <div className = 'active-user__info border-bottom '>
          <div className = 'active-user__info-text'>Favorite animal:</div>
          <div className = 'active-user__info-text'>{this.props.image}</div>
        </div>
        <div className = 'active-user__info'>
          <div className = 'active-user__info-text'>Phone:</div>
          <div className = 'active-user__info-text'>{'8 ' + this.props.phone}</div>
        </div>
        <div className = 'user-data__phrase'>
          <b>Favorite phrase: </b>
          {this.props.phrase}
        </div>
      </div>
    )
  }


}
