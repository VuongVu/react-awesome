import React, { Component } from 'react';

import Seed from '../seed';

import Post from './Post';

class PostList extends Component {
  handlePostUpVote(postId) {
    console.log(`Post ${postId} was upvoted.`);
  }

  render() {
    const posts = Seed.sort((a, b) => b.votes - a.votes);
    const postsComponent = posts.map((post, idx) => (
      <Post {...post} key={`Post-${idx}`} onVote={this.handlePostUpVote} />
    ));

    return <div>{postsComponent}</div>;
  }
}

export default PostList;
