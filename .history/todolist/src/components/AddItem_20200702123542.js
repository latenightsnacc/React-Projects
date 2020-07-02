import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        return (
            <div>
                <input 
                type="text"
                name="title"
                placeholder="Add task..."
                />
            </div>
        )
    }
}

export default AddItem
