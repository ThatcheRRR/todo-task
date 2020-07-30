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
        this.onDoneSet = this.onDoneSet.bind(this);
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
                todoData: [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
            }
        });
    }

    setPropFunction(arr, id, propName) {
        const idx = arr.findIndex(item => item.id === id);
        const newItem = arr[idx];
        newItem[propName] = !newItem[propName];

        return {
            arr: [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
        }
    }

    onImportantSet(id) {
        this.setState(({ todoData }) => {
            const items = this.setPropFunction(todoData, id, 'important');
            console.log(items.arr)
            return {
                todoData: items.arr
            }
        });
    }

    onDoneSet(id) {
        this.setState(({ todoData }) => {
            const items = this.setPropFunction(todoData, id, 'done');
            return {
                todoData: items.arr
            }
        });
    }

    onNameChange(text) {
        this.setState({
            add: text
        });
    }

    render() {
        const done = this.state.todoData.filter(item => item.done).length;
        const todo = this.state.todoData.length - done;
        return(
            <div className = 'app'>
                <Header 
                    done = {done}
                    todo = {todo}
                />
                <SearchPanel />
                <TodoList 
                    todoData = {this.state.todoData}
                    onRemoveItem = {this.onRemoveItem}
                    onDoneSet = {this.onDoneSet}
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