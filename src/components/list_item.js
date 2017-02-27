import React, { Component } from 'react';
import '../style.css';


class ListItem extends Component {
  constructor(props){
   super(props)

   this.state = {
    tasks: [],
    };
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
    return(
      <div className="listclass">
        <li style={{"color": this.state.tasks[key].color, "margin":"10px", "textDecoration": this.state.tasks[key].textDecoration,}} key={key}>
          <input className="checkme" type="checkbox" id="checkbox" value={item.isDone} key={key} onChange={() => {this.finishTask(key)} }  />
            {item.text}
            <img src={require("../trash.png")} alt="delete" />
        </li>
      </div>
        );
      });
    }

  render(){
    return(
      <div>
        <div className="headerdiv">
        <input onChange={(event) =>{ this.setState({input: event.target.value})} }></input>
          <button onClick={()=>{ this.addTasks2(this.state.input)}}>add to your list!</button>
        </div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
      )
  }
}


export default ListItem;
