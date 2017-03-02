import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import './style.css';
import Quote from './components/quote';


class App extends Component {

  render(){
    return(
      <div>
        <Quote />
          <div className='headerdiv'>
            <h1 className="head">What's going on today?</h1>
              <h3 className="secondhead"> Enter what you have to do here </h3>
                </div>
            <List />
      </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));



