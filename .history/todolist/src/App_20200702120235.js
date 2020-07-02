import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './styles/App.scss';

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
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if(task.id === id){
          task.completed = !task.completed
        }
      })
    })
}

  render() {
    return (
      <div className="App">
        <TodoList tasks= {this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
  
}

export default App;
