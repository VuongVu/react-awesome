import React, { Component } from "react";
import PostList from "../../components/PostList";

class Voting extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Post list</h1>
              <h2 className="subtitle">Show all posts of website</h2>
            </div>
          </div>
        </section>

        <PostList />
      </div>
    );
  }
}

export default Voting;
