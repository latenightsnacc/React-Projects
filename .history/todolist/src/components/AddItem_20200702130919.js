import React, { Component } from 'react'

class AddItem extends Component {
    state = {
        title: ''
    }
    onChange = (e) => {
        this.setState({
            // use e.target.name to get the value for multiple fields
            [e.target.name]: e.target.value
        });
    }
    render() {
        return (
            <form style={{display: 'flex'}}>
                <input 
                type="text"
                name="title"
                placeholder="Add task..."
                className="addItem"
                value={this.state.title}
                onChange= {this.onChange}
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
