import React from 'react';
import './TodoList.css';
import TodoListItem from './../TodoListItem/TodoListItem.js';

function TodoList(props) {
    const todoList = props.todoData.map(item => {
        return <TodoListItem 
        key = {item.id} 
        title = {item.title} 
        onRemoveItem = {props.onRemoveItem.bind(this, item.id)}
        onImportantSet = {props.onImportantSet.bind(this, item.id)}
        onDoneSet = {props.onDoneSet.bind(this, item.id)}
        done = {item.done}
        important = {item.important}
        />
    });

    return(
        <ul className = 'todo-list'>
            {todoList}
        </ul>
    )
}

export default TodoList;