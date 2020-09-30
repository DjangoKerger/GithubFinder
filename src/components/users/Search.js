import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state= {
        text: ''
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    };

    onChange = e => {
        //this onchange will get the name of the target and set it to the
        //value of the target.
        this.setState( { [e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.searchUsers(this.state.text)
        this.setState({ text: '' });
    };


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input 
                        type = "text" 
                        name = "text"
                        //value is tied to the state
                        value = {this.state.text}
                        //to change state need an onChange
                        onChange = {this.onChange}  
                        placeholder = "Search Users..." />
                    <input 
                        type="submit" 
                        value="search" 
                        className="btn btn-dark btn-block" /> 
                </form>
            </div>
        )
    }
}

export default Search
