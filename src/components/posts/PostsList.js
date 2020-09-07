import React, { Component } from 'react';
import Post from './Post';
import Moment from 'react-moment';
export default class PostsList extends Component {
  render() {
    const posts = this.props.posts;
    const calendarStrings = {
      lastDay: '[Yesterday at] LT',
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      lastWeek: '[last] dddd [at] LT',
      nextWeek: 'dddd [at] LT',
      sameElse: 'L',
    };
    const postsList =
      posts &&
      posts.map((post) => {
        return (
          <Post
            key={post._id}
            authorName={post.user.name}
            createdAt={
              <Moment calendar={calendarStrings}>{post.createdAt}</Moment>
            }
            content={post.text}
          />
        );
      });
    return <div>{postsList}</div>;
  }
}


