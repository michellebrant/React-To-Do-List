import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      tasks: [],
    }
  }



  addTasks2(input) {
    let toDo = this.state.tasks
    toDo.push({text: input, isDone: false, color: "black", textDecoration: 'none'})

    this.setState({
      tasks: toDo,
    })

  }


  finishTask(key) {
    var realTask = this.state.tasks[key]
    var tasks = this.state.tasks.filter(function(task) { return tasks = realTask})
    console.log(tasks[key].isDone)
    if(tasks[key].isDone === false){
    tasks[key]= {
      text: this.state.tasks[key].text,
      isDone : true,
      color: 'red',
      textDecoration: 'line-through'
    }
    this.setState({ tasks: tasks });
    }
    else if (tasks[key].isDone === true){
    tasks[key]= {
      text: this.state.tasks[key].text,
      isDone : false,
      color: 'black',
      textDecoration: 'none'
    }
    this.setState({ tasks: tasks });
    }
    }


  renderList(){
    return this.state.tasks.map((item, key) =>{
               return(<li style={{"color": this.state.tasks[key].color, "textDecoration": this.state.tasks[key].textDecoration}} key={key}>{item.text}
                 <input type="checkbox" value={item.isDone} key={key} onChange={() => {this.finishTask(key)} }  />
               </li>

            );
        });
  }

tasks5 = ['call mom' , 'do hw']

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
          <h1>To Do List React App! </h1>
          <h3> Enter what you have to do here </h3>
          <input onChange={(event) =>{ this.setState({input: event.target.value})}}></input>
          <button onClick={()=>{ this.addTasks2(this.state.input)}}>add to your list!</button>
           <ul>
             {this.renderList()}
           </ul>

      </div>
    );
  }
}

export default App;



