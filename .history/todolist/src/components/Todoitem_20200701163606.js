import React, { Component } from 'react';
import Card  from 'react-bootstrap/Card';

class TodoItem extends Component {
    render() {
        return (
            <>
                <Card className="task-Card">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Body>I am a card text.</Card.Body>
                </Card>    
            </>
        )
    }
}

export default TodoItem;
