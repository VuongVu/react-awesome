import React, { Component } from 'react';

import Seed from '../seed';

import Post from './Post';

class PostList extends Component {
  render() {
    const post = Seed[0];

    return (
      <div>
        <Post {...post} />
      </div>
    );
  }
}

export default PostList;
