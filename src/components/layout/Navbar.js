import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function Navbar(props) {
  const token = props.auth.signedUserToken;
  let links;
  if (token) links = <SignedInLinks />;
  else links = <SignedOutLinks />;
  return (
    <nav>
      <div className='nav-wrapper green lighten-1'>
        <div className='container'>
          <div className=''>
            <Link to='/' className='brand-logo offset-l2'>
              Odinbook
            </Link>
          </div>
          <div className='col offset-l2'>{links}</div>
        </div>
      </div>
    </nav>
  );
}

const mapStateTpProps = (state) => {
  return {
    ...state,
  };
};
export default connect(mapStateTpProps)(Navbar);
