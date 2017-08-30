import React, { Component } from 'react';

import Seed from '../seed';

import Post from './Post';

class PostList extends Component {
  render() {
    const posts = Seed.sort((a, b) => b.votes - a.votes);
    const postsComponent = posts.map((post, idx) => (
      <Post key={'Post-' + idx} {...post} />
    ));

    return <div>{postsComponent}</div>;
  }
}

export default PostList;
