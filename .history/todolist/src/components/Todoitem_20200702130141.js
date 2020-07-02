import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#ffebcd',
            width: '300px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '15px',
            boxShadow: '5px 2px 2px 2px #cccccc',
            borderBottom: '1px black dotted',
            textDecoration: this.props.task.completed ? 
            'line-through'
            :'none'
        }
    }

    render() {
        const { id, title } = this.props.task;
        return (
            <>
                <div style={this.getStyle()}> 
                    <div>
                        <input type="checkbox" style={{backgroundColor:'black !important'}}  onChange={this.props.markComplete.bind(this, id)} /> &nbsp;
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
    outline: 'none'
}
// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
