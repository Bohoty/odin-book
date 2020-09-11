import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signIn, signUp } from './authActions'
import { AuthContext } from '../../../contexts/AuthContext'
export default function SignUp() {
  const authContext = useContext(AuthContext);
  const token = authContext.state.signedUserToken;
  const err = authContext.state.signUpError;
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState(initialState)
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const signUpState = await signUp(state);
    authContext.setState(signUpState);
    let newState;
    if (signUpState.signUpError === null) {
      newState = await signIn({
        email: state.email,
        password: state.password,
      });
      authContext.setState(newState);
    }
    window.location.reload(false);
  };

  if (token)
    return <Redirect to='/' />;

  const errorMsg = err ? (
    <div>
      <div className='center red-text'>
        {this.props.state.auth.signUpError}
      </div>
    </div>
  ) : <span></span>;


  return (
    <div>
      <div className='container'>
        <div className='card'>
          <div className='card-title'>
            <h4 Style='position:relative; left: 22px; top:22px'>
              Create New Account
              </h4>
          </div>
          <div className='card-content'>
            <form onSubmit={handleSubmit}>
              <div className='input-field'>
                <label htmlFor='name'>Name</label>
                <input id='name' type='text' onChange={handleChange} />
              </div>
              <div className='input-field'>
                <label htmlFor='email'>Email</label>
                <input id='email' type='email' onChange={handleChange} />
              </div>
              <div className='input-field'>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  type='password'
                  onChange={handleChange}
                />
              </div>
              <button className='btn green lighten-1'>Sign Up</button>
            </form>
            {errorMsg}
          </div>
        </div>
      </div>
    </div>
  );

}

