import React, { Component } from 'react'

class TodoItem extends Component {
    render() {
        return (
            <>
                <h5> {this.props.title} </h5>
            </>
        )
    }
}

export default TodoItem
