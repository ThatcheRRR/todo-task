import React from 'react';
import './TodoListItem.css';

function TodoListItem({ title, onRemoveItem }) {
    return(
        <li>
            <div>
                {title}
            </div>
            <div>
                <button className = 'icon'>
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