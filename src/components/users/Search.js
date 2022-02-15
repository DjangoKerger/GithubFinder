import React, { useState, useContext } from 'react';
import GithubContext from '../context/github/githubContext';
import AlertContext from '../context/alert/AlertContext';

const Search = () => {
    //main page search bar.
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const [text, setText] = useState('');


    const onChange = e => {
        //this onchange will get the name of the target and set it to the
        //value of the target.
        setText( e.target.value );
    }
    //e.preventDefault to stop page from reloading
    const onSubmit = e => {
        e.preventDefault();
        if(text === '') {
            alertContext.setAlert('Please enter a name', 'light');
        } else {
            githubContext.searchUsers(text)
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
                { githubContext.users.length > 0 &&  (
                    <button 
                    className="btn btn-light btn-block" 
                    onClick={githubContext.clearUsers} > 
                    Clear
                </button>
                )}
                
            </div>
        )
};



export default Search;
