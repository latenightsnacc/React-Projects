import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#ffebcd',
            fontFamily: 'https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap',
            textDecoration: this.props.task.completed ? 
            'line-through'
            :'none'
        }
    }
    render() {
        return (
            <>
                <div style={this.getStyle()}>
                    <h5> {this.props.task. title} </h5>
                </div>
                
            </>
        )
    }
}

// const cardStyle = {
//     backgroundColor: '#000',
//     padding: '10px 5px',
//     color: 'white',
//     marginBottom: '10px',
//     width: '200px',
//     textAlign: 'center',
//     boxShadow: '2px 2px 4px 2px grey'
// }
// PropTypes
TodoItem.propTypes = {
    task: PropTypes.object.isRequired
}
export default TodoItem
