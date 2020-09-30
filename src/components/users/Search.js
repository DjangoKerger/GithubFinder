import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert}) => {
    const [text, setText] = useState('');


    const onChange = e => {
        //this onchange will get the name of the target and set it to the
        //value of the target.
        setText( e.target.value );
    }

    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
            setAlert('Please enter a name', 'light');
        } else {
            searchUsers(text)
        setText('');
        }
    };


    

        
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input 
                        type = "text" 
                        name = "text"
                        //value is tied to the state
                        value = {text}
                        //to change state need an onChange
                        onChange = {onChange}  
                        placeholder = "Search Users..." />
                    <input 
                        type="submit" 
                        value="search" 
                        className="btn btn-dark btn-block" /> 
                </form>
                { showClear &&  (
                    <button 
                    className="btn btn-light btn-block" 
                    onClick={clearUsers} > 
                    Clear
                </button>
                )}
                
            </div>
        )
};

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search;
