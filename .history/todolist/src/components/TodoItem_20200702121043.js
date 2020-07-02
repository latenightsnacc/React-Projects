import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#ffebcd',
            width: '200px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '15px',
            boxShadow: '5px 2px 2px 2px #cccccc',
            textDecoration: this.props.task.completed ? 
            'line-through'
            :'none'
        }
    }

    render() {
        const { id, title } = this.props.task;
        return (
            <>
                <div className="container">
                    <div className="row flex-d wrap">
                        <div className="col">
                            <div style={this.getStyle()}> 
                                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> &nbsp;
                                {title}
                                <button style={btn}>x</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </>
        )
    }
}
const btn = {
    
}
// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
