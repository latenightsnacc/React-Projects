import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <>
                <h5> {this.props.task.title} </h5>
            </>
        )
    }
}

export default TodoItem
