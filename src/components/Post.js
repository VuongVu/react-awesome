import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div>
        <div className="column is-one-third is-offset-one-third">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.postImageUrl} alt="" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={this.props.submitterAvatarUrl} alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">{this.props.userName}</p>
                  {this.props.shortName ? (
                    <p className="subtitle is-6">@{this.props.shortName}</p>
                  ) : (
                    ''
                  )}
                </div>
              </div>

              <div className="content">
                {this.props.content}
                {this.props.hashTag ? (
                  this.props.hashTag.map((item, idx) => {
                    return <a itemID={idx}>{item}</a>;
                  })
                ) : (
                  ''
                )}
                <br />
                <small>{this.props.dateCreated}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
