import React from 'react';
import Navbar from './components/layout/Navbar';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import UserProfile from './components/user/user profile/UserProfile';
import { useEffect, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

export default function App() {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});

  }, []);

  useEffect(() => {
    const getDataFromLocalStorage = async () => {
      const state = localStorage.getItem("authData");
      if (state)
        authContext.setState({ ...JSON.parse(state), localStorageHasLoaded: true });
      else authContext.setState({ ...authContext.state, localStorageHasLoaded: true });
    }
    getDataFromLocalStorage();
  }, []);

  return (
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

  );
}
