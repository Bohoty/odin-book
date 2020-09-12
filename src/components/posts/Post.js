/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import LikesListModal from './LikesListModal';

export default class Post extends Component {
  state = {
    likeButtonColor: 'grey-text text-lighten-1',
    likeButtonState: 'Like',
    modalIsOpen: false,
    commentContent: '',
    commentSectionIsOpen: false,
  };
  handleLikeClick = (e) => {
    e.preventDefault();
    this.setState({
      likeButtonColor:
        this.state.likeButtonColor === 'grey-text text-lighten-1'
          ? 'green-text text-lighten-1'
          : 'grey-text text-lighten-1',
      likeButtonState:
        this.state.likeButtonState === 'Like' ? 'Unlike' : 'Like',
    });
  };

  handleNewCommentClick = (e) => {
    e.preventDefault();
    this.setState({
      commentSectionIsOpen: true,
    });
  };

  openLikesList = () => {
    this.setState({
      likesListIsOpen: true,
    });
  };
  closeLikesList = () => {
    this.setState({
      likesListIsOpen: false,
    });
  };

  handleCommentChange = (e) => {
    this.setState({
      commentContent: e.target.value,
    });
  };

  render() {
    return (
      <div id='post' className='row'>
        <div className='col s12 m6 l6 push-l3 push-m3'>
          <div className='card'>
            <div className='card-content'>
              <div className='row'>
                <div className='card-title black-text col s9'>
                  <div>
                    <span>{this.props.authorName}</span>
                  </div>
                  <p className='grey-text' Style='font-size:15px;'>
                    Posted {this.props.createdAt}
                  </p>
                </div>
              </div>

              <p Style='font-size: 18px;'>{this.props.content}</p>
              <div className='right'>
                <a onClick={this.openLikesList} href='#'>
                  <span Style='font-size:14px' className='grey-text lighten-1'>
                    12 likes &nbsp;&nbsp;
                  </span>
                </a>
                <a href=''>
                  <span Style='font-size:14px' className='grey-text lighten-1'>
                    8 comments
                  </span>
                </a>
              </div>
            </div>

            <div className='card-action' Style=''>
              <a
                href='#'
                className={this.state.likeButtonColor}
                onClick={this.handleLikeClick}
                Title={this.state.likeButtonState}
              >
                <i
                  className='material-icons'
                  onClick={this.handleLikeClick}
                  Title={this.state.likeButtonState}
                >
                  thumb_up
                </i>
                <span Style='text-transform: none !important; position:relative; bottom: 5px'>
                  {' '}
                  Like
                </span>
              </a>
              <a
                href='#'
                className='blue-text lighten-1'
                onClick={this.handleNewCommentClick}
              >
                <i Style='' className='material-icons'>
                  short_text
                </i>
                <span Style='text-transform: none !important; position:relative; bottom: 5px'>
                  {' '}
                  Comment
                </span>
              </a>
              {this.state.commentSectionIsOpen ? (
                <div id='new-comment'>
                  <textarea
                    className='materialize-textarea'
                    name=''
                    id='commentTextArea'
                    placeholder='Write a comment...'
                    onChange={this.handleCommentChange}
                  ></textarea>
                  <button
                    className='btn-small'
                    Style='visibility:hidden;'
                  ></button>
                  <button
                    Style='text-transform: none'
                    className='btn-small   right green lighten-1'
                  >
                    Comment
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <LikesListModal
          isOpen={this.state.likesListIsOpen}
          closeModal={this.closeLikesList}
        />
      </div>
    );
  }
}

