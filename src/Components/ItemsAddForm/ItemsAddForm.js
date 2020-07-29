import React from 'react';
import './ItemsAddForm.css';

function ItemsAddForm() {
    return(
        <form className = 'add-form'>
            <input type = 'text' placeholder = 'What do you need to do?' />
            <button className = 'add-button'>Add Item</button>
        </form>
    );
}

export default ItemsAddForm;