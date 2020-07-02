import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    cardStyle = () => {
        return {
            background: '#ffebcd',
            width: '300px',
            height: 'auto',
            overflowWrap: 'break-word',
            padding: '10px',
            marginBottom: '15px',
            boxShadow: '5px 2px 2px 2px #cccccc',
            borderBottom: '1px black dotted',
        }
    }

    getStyle = () => {
        return {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            textDecoration: this.props.task.completed ? 
            'line-through'
            :'none'
        }
    }

    render() {
        const { id, title } = this.props.task;
        return (
            <>
                <div style={this.cardStyle()}> 
                    <div style={this.getStyle()}>
                        <input type="checkbox"  onChange={this.props.markComplete.bind(this, id)} checked={this.props.task.completed}/> &nbsp;
                        {title}
                    </div>
                    
                    <button style={btn} onClick={this.props.deleteTask.bind(this, id)}>x</button>
                </div>
            </>
        )
    }
}
const btn = {
    background: 'tomato',
    border: '0px',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    textAlign: 'center',
    color: 'white',
    outline: 'none',
    float: 'right'
}
// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}
export default TodoItem
