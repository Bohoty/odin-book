import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/userActions/authActions';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };
  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
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
              <form onSubmit={this.handleSubmit}>
                <div className='input-field'>
                  <label htmlFor='name'>Name</label>
                  <input id='name' type='text' onChange={this.handleChange} />
                </div>
                <div className='input-field'>
                  <label htmlFor='email'>Email</label>
                  <input id='email' type='email' onChange={this.handleChange} />
                </div>
                <div className='input-field'>
                  <label htmlFor='password'>Password</label>
                  <input
                    id='password'
                    type='password'
                    onChange={this.handleChange}
                  />
                </div>
                <button className='btn green lighten-1'>Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => dispatch(signUp(user)),
  };
};
const mapStateToProps = (state) => {
  return {
    state,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
