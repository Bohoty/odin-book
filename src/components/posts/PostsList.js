import React from 'react';
import Post from './Post';
import Moment from 'react-moment';

export default function PostsList(props) {
  const posts = props.posts;
  const calendarStrings = {
    lastDay: '[Yesterday at] LT',
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    lastWeek: '[last] dddd [at] LT',
    nextWeek: 'dddd [at] LT',
    sameElse: 'L',
  };
  let postsList = null;
  if (posts)
    postsList = posts.map((post) => {
      return (
        <Post
          key={post._id}
          authorFirstName={post.user.firstName}
          authorLastName={post.user.lastName}
          createdAt={
            <Moment calendar={calendarStrings}>{post.createdAt}</Moment>
          }
          content={post.text}
        />
      );
    });
  return <div>{postsList}</div>;
}
