import React, { Component } from 'react';
import Todoitem from './Todoitem';

class Todos extends Component {
    render() {
        return (
            <>
                <h1>Todos</h1>
                {
                    this.props.todos.map(task => {
                        return <Todoitem />
                    })
                }
            </>
        )
    }
}

export default Todos;