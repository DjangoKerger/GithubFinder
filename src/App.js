import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import User from './components/users/User';
import GithubState from './components/context/github/githubState';
import AlertState from './components/context/alert/AlertState';
import './App.css';

const App = () => {
  //What is getting send to index.html. passing down props from this state to components.
    return (
      <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component ={About} />
              <Route exact path='/user/:login' component={User}/>
              <Route component={NotFound} />
            </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
      </GithubState>
    );

  };
  

export default App;
