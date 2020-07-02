import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoList extends Component {
    render() {
        return (
            <>
                <div style={todoList}>
                    { 
                        this.props.tasks.map(task => {
                            return <TodoItem key={task.id} task= {task} markComplete={this.props.markComplete} deleteTask= {this.props.deleteTask} />
                        })
                    }
                </div>
            </>
        )
    }
}

const todoList = {
    display: 'flex',
    width: '100vw',
    justifyContent: 'center'
}
// PropTypes
TodoList.propTypes = {
    tasks: PropTypes.array.isRequired
}
export default TodoList;
