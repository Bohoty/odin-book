import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import UserProfile from './components/user/user profile/UserProfile';
import AuthContextProvider from './contexts/AuthContext';
class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }
  render() {
    return (
      <AuthContextProvider>
        <BrowserRouter>
          <div className='App'>
            <Navbar />
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/UserProfile/:userID' component={UserProfile} />
          </Switch>
        </BrowserRouter>
      </AuthContextProvider>
    );
  }
}

export default App;
