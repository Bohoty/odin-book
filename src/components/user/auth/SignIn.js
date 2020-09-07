import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/userActions/authActions';
import { Link, Redirect } from 'react-router-dom';
class SignIn extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    await this.props.signIn(this.state);
    window.location.reload(false);
  };
  render() {
    const token = this.props.state.auth.signedUserToken;
    const loggedIn = token !== null;
    if (loggedIn) return <Redirect to='/' />;
    const err = this.props.state.auth.signInError;
    const errorMsg = err ? (
      <div>
        <div className='center red-text'>
          {this.props.state.auth.signInError}
        </div>
      </div>
    ) : null;
    return (
      <div>
        <div className='container'>
          <div className='card z-depth-1'>
            <div className='card-title'>
              <h4 Style='position:relative; left: 22px; top:22px'>Sign In</h4>
            </div>
            <div className='card-content'>
              <form onSubmit={this.handleSubmit}>
                <div className='input-field'>
                  <label htmlFor='email'>Email</label>
                  <input
                    required
                    id='email'
                    type='email'
                    onChange={this.handleChange}
                  />
                </div>
                <div className='input-field'>
                  <label htmlFor='password'>Password</label>
                  <input
                    required
                    id='password'
                    type='password'
                    onChange={this.handleChange}
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
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(signIn(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
