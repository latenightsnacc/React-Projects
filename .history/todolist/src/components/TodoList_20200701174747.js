import React, { Component } from 'react';
import { Todoitem } from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <>
                <h1>TodoList</h1>
                <div className="TodoList">
                    { 
                        this.props.todos.map(task => {
                            return <Todoitem  key={task.id} title={task.title} />
                        })
                    }
                </div>
            </>
        )
    }
}

export default TodoList;
