import React, { Component } from 'react';
import Card  from 'react-bootstrap/Card';

class Todoitem extends Component {
    render() {
        return (
            <>
                <Card>
                    <Card.Title>Hello World</Card.Title>
                    <Card.Body>I am a card text.</Card.Body>
                </Card>    
            </>
        )
    }
}

export default Todoitem
