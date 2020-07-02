import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return (
            <>
                <h1>Todos</h1>
                {
                    this.props.todos.map(task => {
                        return <h3> {task.title} </h3>
                    })
                }
            </>
        )
    }
}

export default Todos;