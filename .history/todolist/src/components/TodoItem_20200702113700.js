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
        return (
            <>
                <div className="container">
                    <div className="row flex-d wrap">
                        <div className="col">
                            <div style={this.getStyle()}> 
                                <input type="checkbox" /> {&nbsp;}
                                {this.props.task. title}
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                
            </>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
