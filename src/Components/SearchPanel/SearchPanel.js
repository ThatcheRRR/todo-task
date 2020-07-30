import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.onType = this.onType.bind(this);
    }
    
    onType(e) {
        this.props.onSearch(e.target.value)
    }

    render() {
        return(
            <form className = 'search-panel'>
                <input type = 'text' placeholder = 'What do you need to find?' onChange = {this.onType} value = {this.props.filter} />
            </form>
        );
    }
}