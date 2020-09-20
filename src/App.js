import React from 'react';
import Navbar from './components/layout/Navbar';
import SignIn from './components/user/auth/SignIn';
import SignUp from './components/user/auth/SignUp';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/user/user profile/UserProfile';
import { useEffect, useContext, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import theme from './myDefaultTheme';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
// import tmp from './tmp';
import DesktopDrawer from './components/layout/DesktopDrawer';


export default function App() {

  const authContext = useContext(AuthContext);
  const [inProgress, setInProgress] = useState(false);
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
    < BrowserRouter >
      <ThemeProvider theme={theme}>
        <div>
          {inProgress ? <LinearProgress color='secondary' /> : <></>}
          <Navbar />
          {/* <DesktopDrawer /> */}
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/SignIn'
            render={(props) => (<SignIn {...props} setProgressBarStatus={setInProgress} />)} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/UserProfile/:userID' component={UserProfile} />
          {/* <Route exact path='/tmp' component={tmp} /> */}

        </Switch>
      </ThemeProvider>
    </BrowserRouter>

  );
}
