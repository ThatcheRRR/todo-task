import React from 'react';
import './ItemsAddForm.css';

class ItemsAddForm extends React.Component {

    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if(!this.props.add.length) {
            return;
        }
        this.props.onAddItem(this.props.add);
    }

    onValueChange(e) {
        this.props.onNameChange(e.target.value)
    }

    render() {
        return(
            <form className = 'add-form' onSubmit = {this.addItem}>
                <input type = 'text' placeholder = 'What do you need to do?' value = {this.props.add} onChange = {this.onValueChange} />
                <button className = 'add-button'>Add Item</button>
            </form>
        );
    }
}

export default ItemsAddForm;