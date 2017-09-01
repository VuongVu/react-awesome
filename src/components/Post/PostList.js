import React, { Component } from 'react';

import Seed from '../../data/seed';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.setState({ posts: Seed });
  }

  handlePostUpVote = postId => {
    const nextPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        return Object.assign({}, post, {
          votes: post.votes + 1
        });
      } else {
        return post;
      }
    });

    this.setState({ posts: nextPosts });
  };

  handlePostDownVote = postId => {
    const nextPosts = this.state.posts.map(post => {
      if (post.id === postId) {
        return Object.assign({}, post, {
          votes: post.votes - 1
        });
      } else {
        return post;
      }
    });

    this.setState({ posts: nextPosts });
  };

  render() {
    const posts = this.state.posts.sort((a, b) => b.votes - a.votes);
    const postsComponent = posts.map((post, idx) => (
      <Post
        {...post}
        key={`Post-${idx}`}
        onUpVote={this.handlePostUpVote}
        onDownVote={this.handlePostDownVote}
      />
    ));

    return <div>{postsComponent}</div>;
  }
}

export default PostList;
