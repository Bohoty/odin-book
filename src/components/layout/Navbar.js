import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
export default function Navbar() {
  const authContext = useContext(AuthContext);
  console.log(authContext.state);
  const links = authContext.state.signedUserToken ? <SignedInLinks /> : <SignedOutLinks />;
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
