import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
  render(){
  return (
    <div className="App">
      <h1>To Do</h1>
        <h3> Enter what you have to do here </h3>
          <input onChange={(event) =>{ this.setState({input: event.target.value})}}></input>
            <button onClick={()=>{ this.addTasks2(this.state.input)}}>add to your list!</button>
              <ul>
                {this.renderList()}
              </ul>
    </div>
    )}
}


export default SearchBar;




