import React from 'react';
import Header from './../Header/Header';
import SearchPanel from './../SearchPanel/SearchPanel';
import TodoList from './../TodoList/TodoList';
import ItemsAddForm from './../ItemsAddForm/ItemsAddForm';
import './App.css';

export default class App extends React.Component {

    state = {
        todoData: [
            {id: 1, title: 'Пофлэксить', important: false, done: false},
            {id: 2, title: 'Залить соляру', important: false, done: false},
            {id: 3, title: 'Не кринжануть', important: false, done: false}
        ],
        filter: '',
    }

    render() {
        return(
            <div className = 'app'>
                <Header />
                <SearchPanel />
                <TodoList 
                    todoData = {this.state.todoData}
                />
                <ItemsAddForm />
            </div>
        );
    }
}