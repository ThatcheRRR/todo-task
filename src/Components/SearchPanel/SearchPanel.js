import React from 'react';
import './SearchPanel.css';

function SearchPanel() {
    return(
        <form className = 'search-panel'>
            <input type = 'text' placeholder = 'What do you need to find?' />
        </form>
    );
}

export default SearchPanel;