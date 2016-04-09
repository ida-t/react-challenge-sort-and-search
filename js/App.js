import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import ActiveUser from './components/ActiveUser'
import UserList from './components/UserList'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.data = {};
    this.state.sort = {};
    this.state.active = {};
  }

  componentDidMount() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);
    xhr.send();

    var self = this;
    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      if (xhr.status != 200) {
        console.log('ошибочка!')
      } else {
        self.setState({
          data: JSON.parse(xhr.responseText)
        })
        self.setState({
          active: self.state.data[0]
        })
        self.sort();
        self.changeActive();
      }
    }


  }

  search(){
      var userData = document.getElementsByClassName('user-data');
      var searchInput = document.getElementById('search')
      searchInput.oninput = function(){
        var searchVal = searchInput.value.toLowerCase();;
        [].forEach.call(userData, function(item) {
          var name = item.getElementsByClassName('user-data__name')[0].innerText.toLowerCase();
          if (name.indexOf(searchVal) + 1) {
            item.classList.remove('invisible');
            item.classList.add('user-data_visible');
          } else {
            item.classList.add('invisible');
            item.classList.remove('user-data_visible');
          }
        })
      }
  }

  render() {
    return (
      <div className = 'content'>
        <SearchBar search = {this.search}/>
        <ToolBar/>
        <div className = 'users'>
          <ActiveUser {...this.state.active}/>
          <UserList data = {this.state.data}/>
        </div>
      </div>
    )
  }

sortArrayByKey(arr, key, sorted){

  var sortedArr = arr.sort(function(a, b) {
    if (sorted) {
      arr.sort(function(a,b) {return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);} );
    } else {
      arr.sort(function(a,b) {return (a[key] < b[key]) ? 1 : ((b[key] < a[key]) ? -1 : 0);} );
    }
  })

  return sortedArr;
}

  sort(){
    var self = this;
    var sortedName = false;
    var sortedAge = false;

    document.querySelector('#sort-name-button').addEventListener('click', function(event){

      var sortArr = self.sortArrayByKey(self.state.data, "name", sortedName);

      if (sortedName) {
        sortedName = false;
      } else {
        sortedName = true;
      }

      self.setState({
        data: sortArr
      })

    })

    document.querySelector('#sort-age-button').addEventListener('click', function(event){
      event.preventDefault();
      var sortArr = self.sortArrayByKey(self.state.data, "age", sortedAge);
      self.setState({
        data: sortArr
      })

      if (sortedAge) {
        sortedAge = false;
      } else {
        sortedAge = true;
      }
    })
  }

  changeActive(){

    var self = this;

    [].forEach.call(document.getElementsByClassName('user-data'), function(userDataItem){
      userDataItem.addEventListener('click', function(event){
        event.preventDefault();
        var children = document.querySelector('.user-data').parentNode.childNodes;
        var activeIndex = 0;
        for (var i = 0; i < children.length; i ++) {
          if (children[i] === event.target) {
            activeIndex = i;
          }
        }
        self.setState({
          active: self.state.data[activeIndex - 1]
        })
      })
    })
  }
}
