import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'

class App extends Component {

  render(){
    return(
      <div>
        <h1>To Do</h1>
        <h3> Enter what you have to do here </h3>
        <List />
      </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));



