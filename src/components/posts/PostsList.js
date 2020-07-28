import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
export class PostsList extends Component {
  render() {
    return (
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
