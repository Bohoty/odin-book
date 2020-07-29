import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/userActions/authActions';
function SignedInLinks(props) {
  const handleClick = async (e) => {
    e.preventDefault();
    await props.signOut();
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToProps)(SignedInLinks);
