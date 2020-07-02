import React, {Component} from 'react';
import TodoList from './components/TodoList';
import Header from './components/layout/Header';
import './styles/App.scss';
import AddItem from './components/AddItem';
import { v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import About from './pages/About';
import Axios from 'axios';

class App extends Component  {
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState( {
      todos: res.data
    }))
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

  // Add a new task item
  addItem = (title) => {
    Axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    }).then(res => )
    this.setState(
      {
        todos: [...this.state.todos, newTask]
      }
    );
    
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <div className="container">
              <AddItem addItem={this.addItem} />
              <TodoList tasks= {this.state.todos} markComplete={this.markComplete} deleteTask= {this.deleteTask} />
            </div>
          )} />
          <Route path="/about" component={About} />
          
        </div>
      </Router>
    );
  }
  
}

export default App;
