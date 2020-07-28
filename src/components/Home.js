import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from './posts/PostsList';
export class Home extends Component {
  render() {
    return (
      <div>
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
