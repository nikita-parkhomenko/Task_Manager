import React, {Component} from 'react';
import './App.css';

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'

class App extends Component {

  state = {
    tasks: [
      {task: 'Run'},
      {task: 'Read'},
      {task: 'Sleep'},
    ]
  }

  render() {
    return(
      <div className="App">
        <Header />
        <Main />
      </div>
    )
  }
}

export default App;
