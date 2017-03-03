import React, { Component } from 'react';
import '../style.css';


let localTasks = JSON.parse(localStorage.getItem('tasks')) || [];


class ListItem extends Component {
  constructor(props){
   super(props)

   this.state = {
    tasks: localTasks,
    input: ' ',
    };
  }

  addTasks2(input) {
    let toDo = this.state.tasks
    toDo.push({text: input, isDone: false, color: "black", textDecoration: 'none'})
    localStorage.setItem('tasks', JSON.stringify(toDo))
    localStorage.setItem('input', '')
    this.setState({
      tasks: toDo,
      input: ' '
       })

    }

  deleteTasks(key) {
    let toDoArray = this.state.tasks;
    let index = key

    toDoArray.splice(index, 1)


    this.setState({
      tasks: toDoArray,
       })

      localStorage.setItem('tasks', JSON.stringify(toDoArray))
    }

  finishTask(key) {
    var realTask = this.state.tasks[key]
    var tasks = this.state.tasks.filter(function(task) { return tasks = realTask})
    if(tasks[key].isDone === false){
     tasks[key]= {
      text: this.state.tasks[key].text,
      isDone : true,
      color: 'red',
      textDecoration: 'line-through'
     }
      this.setState({ tasks: tasks });
      localStorage.setItem('tasks', JSON.stringify(tasks))
     }
    else if (tasks[key].isDone === true){
      tasks[key]= {
        text: this.state.tasks[key].text,
        isDone : false,
        color: 'black',
        textDecoration: 'none'
      }
      this.setState({ tasks: tasks });
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  }

  renderList(){
  return this.state.tasks.map((item, key) =>{
    if (this.state.tasks[key].isDone === true)
      return(
        <div className="listclass" key={key}>
          <li style={{"color": this.state.tasks[key].color, "margin":"10px", "textDecoration": this.state.tasks[key].textDecoration,}} key={key}>
            <input type="checkbox" checked={this.state.tasks[key].isDone} key={key} onChange={() => {this.finishTask(key)} }  />
              {item.text}
              <img
              src={require("../trash.png")} alt="delete"

              onClick={()=> { this.deleteTasks(key)}}/>
          </li>
        </div>
      )
      else
        return(
          <div className="listclass" key={key}>
            <li style={{"color": this.state.tasks[key].color, "margin":"10px", "textDecoration": this.state.tasks[key].textDecoration,}} key={key}>
              <input type="checkbox" key={key} checked={this.state.tasks[key].isDone} onChange={() => {this.finishTask(key)} }  />
                {item.text}
                <img
                src={require("../trash.png")} alt="delete"

                onClick={()=> { this.deleteTasks(key)}}/>
            </li>
          </div>
          )

      });
    }

  render(){
    return(
      <div>
        <div className="headerdiv">
        <input type="text" value={this.state.input} onChange={(event) =>{ this.setState({input: event.target.value})} }></input><br />
          <button onClick={()=>{ this.addTasks2(this.state.input)}}>add to your list!</button>
        </div>
        <ul className="wrap">
          {this.renderList()}
        </ul>
      </div>
      )
  }
}


export default ListItem;
