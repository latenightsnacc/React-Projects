import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <>
                <h5> {this.props.task. title} </h5>
            </>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
