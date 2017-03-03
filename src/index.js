import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'
import './style.css';
import './animate.css';
import Quote from './components/quote';

const currentdate = new Date();
const day = (currentdate.getMonth()+1)
const year = currentdate.getFullYear()
                // + currentdate.getHours() + ":"
                // + currentdate.getMinutes()

class App extends Component {

getMonth(){
const month = (currentdate.getDate() )
    if (month === 1) {
       return(
        <div>
          <p className="date">January  { day }, { year } </p>
        </div>
        )
     }
    else if (month === 2) {
       return(
        <div>
          <p className="date">February { day }, { year } </p>
        </div>
        )
     }
    else if (month === 3) {
      return(
        <div>
          <p className="date">March  { day }, { year } </p>
        </div>
        )
    }
     else if (month === 4) {
      return(
        <div>
          <p className="date">April { day }, { year } </p>
        </div>
        )
    }
     else if (month === 5) {
      return(
        <div>
          <p className="date">May { day }, { year } </p>
        </div>
        )
    }
     else if (month === 6) {
      return(
        <div>
          <p className="date">June { day }, { year } </p>
        </div>
        )
    }
     else if (month === 7) {
      return(
        <div>
          <p className="date">July { day }, { year } </p>
        </div>
        )
    }
     else if (month === 8) {
      return(
        <div>
          <p className="date">August { day }, { year } </p>
        </div>
        )
    }
     else if (month === 9) {
      return(
        <div>
          <p className="date">September { day }, { year } </p>
        </div>
        )
    }
     else if (month === 10) {
      return(
        <div>
          <p className="date">October { day }, { year } </p>
        </div>
        )
    }
     else if (month === 11) {
      return(
        <div>
          <p className="date">November { day }, { year } </p>
        </div>
        )
    }
     else  {
      return(
        <div>
          <p className="date">December { day }, { year } </p>
        </div>
        )
    }
}

 render(){
    return(
      <div>
        <Quote />
          <div className='headerdiv'>
            { this.getMonth() }
            <h1 className="head">What's going on today?</h1>
                </div>
            }
            <List />
      </div>
      )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));



