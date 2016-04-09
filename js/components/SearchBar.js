import React, {Component} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="search-bar form-group">
        <input type="text" className="form-control" placeholder="Search people by name..." id = 'search' />
      </div>
    )
  };

  componentDidMount(){
    this.props.search();
  };



}
