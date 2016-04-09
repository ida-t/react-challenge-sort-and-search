import React, { Component } from 'react';
import UserData from './UserData'

export default class UserList extends Component {
    constructor(props){
      super(props)
    }

    render() {
      if (this.props.data) {
        return (
          <div>
            <div className = 'user-data-title'>
              <div className = 'user-data__img'> Image</div>
              <div className = 'user-data__name'>Name</div>
              <div className = 'user-data__age'>Age</div>
              <div className = 'user-data__phone'>Phone</div>
            </div>
              {
                [].map.call(this.props.data, function(item, i){
                  return <UserData {...item} key={i}/>
                })
              }
          </div>
        )
      } else return null;
    }

}
