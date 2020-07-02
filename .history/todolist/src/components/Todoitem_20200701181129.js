import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../styles/TodoItem.scss';
import PropTypes from 'prop-types';


class Todoitem extends Component {

    getStyle = () => {
        if(this.props.completed){
            return {
                textDecoration: 'line-through'
            }
        } else {
            
        }
    }
    render() {
        return (
            <>
                <Card className="TodoItem">
                    <Card.Title style={this.getStyle()}> {this.props.title} </Card.Title>
                </Card>
            </>
        )
    }
}

Todoitem.propTypes = {
    task: PropTypes.object.isRequired
}
export default Todoitem;
