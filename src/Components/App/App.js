import React from 'react';
import Header from './../Header/Header';
import SearchPanel from './../SearchPanel/SearchPanel';
import TodoList from './../TodoList/TodoList';
import ItemsAddForm from './../ItemsAddForm/ItemsAddForm';
import './App.css';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todoData: [
                {id: 1, title: 'Пофлэксить', important: false, done: false},
                {id: 2, title: 'Залить соляру', important: false, done: false},
                {id: 3, title: 'Не кринжануть', important: false, done: false}
            ],
            filter: '',
            add: '',
        }
        this.idGenerator = 4;
        this.onAddItem = this.onAddItem.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onImportantSet = this.onImportantSet.bind(this);
    }

    onAddItem(text) {
        this.setState(({ todoData }) => {
            const newItem = {
                id: ++this.idGenerator,
                title: text,
                important: false,
                done: false
            }
            const newArray = [...todoData, newItem];

            return {
                add: '',
                todoData: newArray
            }
        });
    }

    onRemoveItem(id) {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex(item => item.id === id);

            return {
                todoData: [...todoData.splice(0, idx), ...todoData.splice(idx + 1)]
            }
        });
    }

    onNameChange(text) {
        this.setState({
            add: text
        });
    }

    render() {
        return(
            <div className = 'app'>
                <Header />
                <SearchPanel />
                <TodoList 
                    todoData = {this.state.todoData}
                    onRemoveItem = {this.onRemoveItem}
                    onImportantSet = {this.onImportantSet}
                />
                <ItemsAddForm 
                    onAddItem = {this.onAddItem}
                    onNameChange = {this.onNameChange}
                    add = {this.state.add}
                />
            </div>
        );
    }
}