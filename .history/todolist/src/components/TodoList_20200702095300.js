import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoList extends Component {
    render() {
        return (
            <>
                <h1>TodoList</h1>
                <div className="TodoList">
                    { 
                        this.props.todos.map(task => {
                            return <h5>{task.title}</h5>
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
