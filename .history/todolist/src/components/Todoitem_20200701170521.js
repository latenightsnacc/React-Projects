import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/TodoItem.scss';
import PropTypes from 'prop-types';

export class Todoitem extends Component {
    render() {
        return (
            <>
                <Card className="TodoItem">
                    <Card.Title> {this.props.title} </Card.Title>
                </Card>
            </>
        )
    }
}

export default Todoitem
