import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../user/auth/authActions';
import { AuthContext } from '../../contexts/AuthContext';


export default function SignedInLinks() {
  const authContext = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    const newState = signOut();
    authContext.setState(newState);
    window.location.reload(false);
  };
  return (
    <div>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>
          <Link to='#' onClick={handleClick}>
            Sign Out
          </Link>
        </li>
      </ul>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='#' className='sidenav-close' onClick={handleClick}>
            Sign Out
          </Link>
        </li>
      </ul>
      <a href='/' data-target='slide-out' className='sidenav-trigger'>
        <i className='material-icons'>menu</i>
      </a>
    </div>
  );
}

