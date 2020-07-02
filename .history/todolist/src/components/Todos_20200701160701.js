import React, { Component } from 'react';

class Todos extends Component {
    render() {
        return this.props.tasks.map(task => {
            <h3> {task.title} </h3>
        });
    }
}

export default Todos;