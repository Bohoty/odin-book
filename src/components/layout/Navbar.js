import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

function Navbar(props) {
  console.log(props);
  const token = props.auth.signedUserToken;
  let links;
  if (token) links = <SignedInLinks />;
  else links = <SignedOutLinks />;
  return (
    <nav>
      <div className='nav-wrapper green lighten-1'>
        <div className='container'>
          <div className=''>
            <a href='#' className='brand-logo offset-l2'>
              Odinbook
            </a>
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
