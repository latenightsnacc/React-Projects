import React from 'react'

function Header() {
    return (
        <div style={headerStyle}>
           <h1>TodoList</h1> 
        </div>
    )
}

const headerStyle = {
    background: 'black',
    color: '#ffebcd',
    textAlign: 'center',
    lineHeight: '1.4'
}

export default Header;
