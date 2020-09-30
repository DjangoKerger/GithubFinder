import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';

class App extends Component {
  //Local state in top component allows it to be passed down to rest of components.
  state = {
    users: [],
    loading: false
  }

  //component did mount will fire when component is done loading.

  // async componentDidMount(){

  //   this.setState({ loading: true});

  //   //using axios.get to fetch the github pai
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //     this.setState({ users: res.data, loading: false});
  // }
  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false});
  }

  // clearUsers from state
  clearUsers = () => this.setState({ users: [], loading: false });


   render() {
    //What is getting send to index.html. passing down props from this state to components.
    return (
      <div className="App">
        <Navbar />
          <div className="container">
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={this.state.users.length > 0 ? true : false}/>
          <Users 
            loading={this.state.loading} 
            users={this.state.users}/>
          </div>
      </div>
    );

  }
  
}

export default App;
