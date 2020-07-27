import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import UserProfile from './components/user/UserProfile';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Post from './components/posts/Post';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Post />
        </div>
        <Switch>
          <Route exact path='/SignIn' component={SignIn} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/UserProfile/:id' component={UserProfile} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
