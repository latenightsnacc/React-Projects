import React, {Component} from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Call Tim',
          completed: false
        },
        {
          id: 2,
          title: 'Call Debs',
          completed: false
        },
        {
          id: 3,
          title: 'Call Mom',
          completed: false
        }
      ]
    }
    
  }

  render() {
    return (
      <div className="App">
        <Todos tasks= {this.state.todos} />
      </div>
    );
  }
  
}

export default App;
