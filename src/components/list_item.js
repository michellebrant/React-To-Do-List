import React, { Component } from 'react';
import '../style.css';


let localTasks = JSON.parse(localStorage.getItem('tasks')) || [];

class ListItem extends Component {
  constructor(props){
   super(props)

   this.state = {
    tasks: [],
    input: ''

    };
  }

  addTasks2(input) {
    let toDo = this.state.tasks
    toDo.push({text: input, isDone: false, color: "black", textDecoration: 'none'})
    localStorage.setItem('tasks', JSON.stringify(toDo))
    this.setState({
      tasks: toDo,
      input:''
       })

    }

  deleteTasks(key) {
    let toDoArray = this.state.tasks;
    let index = key

    toDoArray.splice(index, 1)


    this.setState({
      tasks: toDoArray,
       })
    }

  finishTask(key) {
    var realTask = this.state.tasks[key]
    var tasks = this.state.tasks.filter(function(task) { return tasks = realTask})
      console.log(realTask)
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
    return(
      <div className="listclass" key={key}>
        <li style={{"color": this.state.tasks[key].color, "margin":"10px", "textDecoration": this.state.tasks[key].textDecoration,}} key={key}>
          <input className="checkme" type="checkbox" id="checkbox" value={item.isDone} key={key} onChange={() => {this.finishTask(key)} }  />
            {item.text}
            <img
            src={require("../trash.png")} alt="delete"

            onClick={()=> { this.deleteTasks(key)}}/>
        </li>
      </div>
        );
      });
    }

  renderLocalStorage(){
    return localTasks.map((item, key) =>{
      return(
        <div className="listclass" key={key} >
          <li style={{'color': item.color, 'margin':'10px', 'textDecoration':item.textDecoration}} key={key}>
            <input className="checkme" type="checkbox" id="checkbox" value={item.isDone} key={key} onChange={() => {this.finishTask(key)} } />
             {item.text}
            <img
            src={require('../trash.png')} alt="delete"
            onClick={()=> {this.deleteTasks(key)}} />
          </li>
        </div>
        )}
  )}


  render(){
    return(
      <div>
        <div className="headerdiv">
        <input value={this.state.input} onChange={(event) =>{ this.setState({input: event.target.value})} }></input>
          <button onClick={()=>{ this.addTasks2(this.state.input)}}>add to your list!</button>
        </div>
        <ul>
          {this.renderLocalStorage() }
          {this.renderList()}
        </ul>
      </div>
      )
  }
}


export default ListItem;
