import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <>
                <h1>TodoList</h1>
                <div className="TodoList">
                    { 
                        this.props.todos.map(task => {
                            return <TodoItem key={task.id} task= {task} />
                        })
                    }
                </div>
            </>
        )
    }
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}
export default TodoList;
