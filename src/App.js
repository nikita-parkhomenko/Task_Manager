import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

class App extends Component {

  state = {
    tasks: [
      {id: '1', task: 'Run'},
      {id: '2', task: 'Read'},
      {id: '3', task: 'Sleep'},
    ],
    task: ''
  }

  inputChangeHandler = (event) => {
    this.setState({task: event.target.value})
  }

  inputSubmitHandler = (event) => {
    const tasksArr = [...this.state.tasks];
    const newTask = {
      task: this.state.task
    };

    tasksArr.push(newTask);
    console.log(tasksArr);

    this.setState({
      tasks: tasksArr,
      task: ''
    })

    event.preventDefault();
  }

  taskDoneHandler = (id) => {
    const tasksArr = [...this.state.tasks];
    let taskDone = tasksArr.findIndex( task => {
      return task.id === id
    })
    taskDone = tasksArr[taskDone];
    tasksArr.splice()

  }

  render() {
    return(
      <div className="App">
        <Header />
        <Main 
          onChangeHandler={this.inputChangeHandler}
          onSubmitHandler={this.inputSubmitHandler}
          tasks={this.state.tasks}/>
      </div>
    )
  }
}

export default App;
