import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      [
        {
          id: 1,
          title: "Call mom",
          completed: false
        },
        {
          id: 2,
          title: "Visit mom",
          completed: false
        },
        {
          id: 2,
          title: "Help mom",
          completed: false
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
  
}

export default App;
