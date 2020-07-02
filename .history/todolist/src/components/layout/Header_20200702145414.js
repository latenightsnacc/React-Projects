import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div style={headerStyle}>
           <h1>TodoList</h1> 
           <Link to="/">TodoList</Link> | <Link to="/about">About</Link>
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

export default Header;
