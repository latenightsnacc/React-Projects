import React, {Component} from 'react';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import './styles/App.scss';
import AddItem from './components/AddItem';

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

  // Toggle Complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(task => {
        if(task.id === id){
          task.completed = !task.completed
        }
        return task;
      })
    })
  }

  // Delete Task
  deleteTask = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(
        task => task.id !== id
      )]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddItem addItem={this.addItem} />
          <TodoList tasks= {this.state.todos} markComplete={this.markComplete} deleteTask= {this.deleteTask} />
        </div>
        
      </div>
    );
  }
  
}

export default App;
