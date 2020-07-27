import React, { Component } from 'react';

export default class UserProfile extends Component {
  render() {
    const id = this.props.match.params.id;
    console.log(this.props);
    return (
      <div>
        <h1>UserProfile {id}</h1>
      </div>
    );
  }
}

