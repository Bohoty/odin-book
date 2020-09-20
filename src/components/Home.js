import React, { useEffect, useContext, useState } from 'react';
import { getFeedPosts } from '../store/actions/postsAction';
import { AuthContext } from '../contexts/AuthContext';
import PostsList from './posts/PostsList';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core'
export default function Home() {
  const authContext = useContext(AuthContext);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchFeedPosts = async (token) => {
      if (token) {
        const postsArray = await getFeedPosts(token);
        console.log(Array.isArray(postsArray));
        if (Array.isArray(postsArray))
          setPosts(<PostsList posts={postsArray} />);
      }
      else
        setPosts(<Redirect to="/SignIn" />)
    }
    fetchFeedPosts(authContext.state.signedUserToken);
  }, [authContext]);
  return (
    <div>
      {/* <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button><Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button><Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button>
      <Button>Zeby manga</Button> */}
      {posts}
    </div>
  )
}
