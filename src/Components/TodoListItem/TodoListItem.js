import React from 'react';
import './TodoListItem.css';

function TodoListItem({ done, important, title, onRemoveItem, onImportantSet, onDoneSet }) {
    let className = 'title';
    let buttonClass = 'icon';

    if(done) {
        className += ' done';
    }

    if(important) {
        className += ' important';
        buttonClass += ' active';
    }

    return(
        <li>
            <span className = {className} onClick = {onDoneSet}>
                {title}
            </span>
            <div>
                <button className = {buttonClass} onClick = {onImportantSet}>
                    <i className = 'fa fa-exclamation fa-2x'></i>
                </button>
                <button className = 'icon' onClick = {onRemoveItem}>
                    <i className = 'fa fa-trash-o fa-2x'></i>
                </button>
            </div>
        </li>
    )
}

export default TodoListItem;