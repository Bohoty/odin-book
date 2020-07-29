import React from 'react';
import { Link } from 'react-router-dom';
function SignedOutLinks() {
  return (
    <div>
      <ul id='nav-mobile' className='right hide-on-med-and-down'>
        <li>
          <Link to='/signin'>Sign In</Link>
        </li>
        <li>
          <Link to='/signup'>Sign Up</Link>
        </li>
      </ul>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/signin' className="sidenav-close">Sign In</Link>
        </li>
        <li>
          <Link to='/signup' className="sidenav-close">Sign Up</Link>
        </li>
      </ul>
      <a href='/' data-target='slide-out' className='sidenav-trigger'>
        <i className='material-icons'>menu</i>
      </a>
    </div>
  );
}

export default SignedOutLinks;
