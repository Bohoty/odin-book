import React from 'react';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function Navbar() {
  return (
    <nav>
      <div className='nav-wrapper green lighten-1'>
        <div className='container'>
          <div className=''>
            <a href='#' className='brand-logo offset-l2'>
              Odinbook
            </a>
          </div>
          <div className='col offset-l2'>
            <SignedOutLinks />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
