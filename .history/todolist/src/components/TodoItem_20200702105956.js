import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <>
                <div style={cardStyle}>
                    <h5> {this.props.task. title} </h5>
                </div>
                
            </>
        )
    }
}

const cardStyle = {
    backgroundColor: '#000',
    padding: '10px 5px',
    color: 'white',
    marginBottom: '10px',
    width: '200px',
    textAlign: 'center',
    boxShadow: '2px 2px 4px 2px #f4f4f4'
}
// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
