import React, { useEffect, useState } from 'react';
import { userExists } from '../../../store/actions/userProfileDataActions';
import { Redirect } from 'react-router-dom';
import Home from '../../Home';
import UserPosts from './UserPosts';

export default function UserProfile(props) {
  const userID = props.match.params.userID;
  const [userExistanceStatus, setUserExistanceStatus] = useState(null);
  // check if this userID exists
  useEffect(() => {
    const setNewState = async () => {
      const response = await userExists(userID);
      setUserExistanceStatus(response);
    };
    setNewState();
  }, [userID]);
  if (userExistanceStatus === null) {
    return <h1>Loading.....</h1>;
  }
  return userExistanceStatus ? (
    <div>
      <h1>This is the user profile</h1>
      <UserPosts userID={userID} />
    </div>
  ) : (
    <Redirect to={Home} />
  );
}
