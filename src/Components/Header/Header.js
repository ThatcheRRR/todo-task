import React from 'react';
import './Header.css';

function Header({ done, todo }) {
    return(
        <header>
            <h1>Todo List</h1>
            <p>{todo} more to do, {done} done</p>
        </header>
    );
}

export default Header;