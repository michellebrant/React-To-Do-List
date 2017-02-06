import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import List from './components/list'

class App extends Component {
  render(){
    return(
      <div>
      <h1>Hello world!</h1>
      </div>
      )
  }
}
// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       tasks: [],
//     }
//   }



//   addTasks2(input) {
//     let toDo = this.state.tasks
//     toDo.push({text: input, isDone: false, color: "black", textDecoration: 'none'})

//     this.setState({
//       tasks: toDo,
//     })

//   }


//   finishTask(key) {
//     var realTask = this.state.tasks[key]
//     var tasks = this.state.tasks.filter(function(task) { return tasks = realTask})
//     console.log(tasks[key].isDone)
//     if(tasks[key].isDone === false){
//     tasks[key]= {
//       text: this.state.tasks[key].text,
//       isDone : true,
//       color: 'red',
//       textDecoration: 'line-through'
//     }
//     this.setState({ tasks: tasks });
//     }
//     else if (tasks[key].isDone === true){
//     tasks[key]= {
//       text: this.state.tasks[key].text,
//       isDone : false,
//       color: 'black',
//       textDecoration: 'none'
//     }
//     this.setState({ tasks: tasks });
//     }
//     }


//   renderList(){
//     return this.state.tasks.map((item, key) =>{
//                return(<li style={{"color": this.state.tasks[key].color, "textDecoration": this.state.tasks[key].textDecoration}} key={key}>{item.text}
//                  <input type="checkbox" value={item.isDone} key={key} onChange={() => {this.finishTask(key)} }  />
//                </li>

//             );
//         });
//   }

// tasks5 = ['call mom' , 'do hw']

//   render() {
//     return (
//       <List />
//     );
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'));



