import React, { useContext, useState } from 'react';
import { signIn } from './authActions';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const err = authContext.state.signInError;
  const token = authContext.state.signedUserToken;

  const initialState = {
    email: '',
    password: '',
  };

  const [state, setState] = useState(initialState)
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newState = await signIn(state);
    authContext.setState({ ...authContext.state, ...newState });
  };


  const errorMsg = err ? (
    <div>
      <div className='center red-text'>
        {authContext.state.signInError}
      </div>
    </div>
  ) : <span></span>;
  if (authContext.state.localStorageHasLoaded) {
    if (token) return <Redirect to='/' />;
    return (
      <div>
        <div className='container'>
          <div className='card z-depth-1'>
            <div className='card-title'>
              <h4 Style='position:relative; left: 22px; top:22px'>Sign In</h4>
            </div>
            <div className='card-content'>
              <form onSubmit={handleSubmit}>
                <div className='input-field'>
                  <label htmlFor='email'>Email</label>
                  <input
                    required
                    id='email'
                    type='email'
                    onChange={handleChange}
                  />
                </div>
                <div className='input-field'>
                  <label htmlFor='password'>Password</label>
                  <input
                    required
                    id='password'
                    type='password'
                    onChange={handleChange}
                  />
                </div>
                <button className='btn green lighten-1'>Sign In</button>
              </form>
              {errorMsg}
              <div className='center'>
                <p>
                  <Link to='/signup'>or create new account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else return null;
}
export default SignIn;
