import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        return (
            <form style={{display: 'flex'}}>
                <input 
                type="text"
                name="title"
                placeholder="Add task..."
                className="addItem"
                />
                <input 
                type="submit"
                value="+"
                className="addBtn"
                />
            </form>
        )
    }
}

export default AddItem
