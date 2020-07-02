import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return (
            <>
                <h1>Todos</h1>
                {
                    this.props.todos.map(task => {
                        return <TodoItem title={task.title} />
                    })
                }
            </>
        )
    }
}

export default Todos;