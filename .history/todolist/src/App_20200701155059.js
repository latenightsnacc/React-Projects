import React from 'react';
import Todos from './components/Todos';
import './App.css';

function App() {
  state = {
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

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
