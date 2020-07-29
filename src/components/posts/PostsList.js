import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import Moment from 'react-moment';
import { getAllPosts } from '../../store/actions/postsAction';
export class PostsList extends Component {
  render() {
    this.props.getAllPosts();
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

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllPosts: () => dispatch(getAllPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
