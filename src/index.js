import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import './style.css';

class App extends Component {

  render(){
    return(
      <div>
        <h1 className="head">What's going on today?</h1>
          <h3 classname="secondhead"> Enter what you have to do here </h3>
            <List />
      </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));



