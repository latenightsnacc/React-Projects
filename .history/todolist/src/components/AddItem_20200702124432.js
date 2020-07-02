import React, { Component } from 'react'

class AddItem extends Component {
    render() {
        return (
            <form style={{display: flex}}>
                <input 
                type="text"
                name="title"
                placeholder="Add task..."
                />
                <input 
                type="submit"
                value="+"
                style={addBtn}
                />
            </form>
        )
    }
}

export default AddItem
