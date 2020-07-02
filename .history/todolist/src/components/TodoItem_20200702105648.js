import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <>
                <div style={{marginBottom: '30px'}}>
                    <h5> {this.props.task. title} </h5>
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
