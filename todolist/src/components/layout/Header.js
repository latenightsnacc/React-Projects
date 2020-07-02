import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={headerStyle}>
           <h1>TodoList</h1> 
           <Link style={linkStyle} to="/">List</Link> | <Link style={linkStyle} to="/about">About</Link>
        </div>
    )
}

const headerStyle = {
    background: 'black',
    color: '#ffebcd',
    textAlign: 'center',
    lineHeight: '1.4',
    padding: '10px'
}

const linkStyle = {
    color: 'white'
}
export default Header;
