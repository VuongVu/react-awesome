import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);

    this.handleUpVote = this.handleUpVote.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  render() {
    return (
      <div className="column is-one-third is-offset-one-third">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src={this.props.submitterAvatarUrl} alt="" />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">{this.props.userName}</p>
                <p className="subtitle is-6">{this.props.dateCreated}</p>
              </div>
            </div>

            <div className="content">
              {this.props.content}
              {this.props.hashTag &&
                this.props.hashTag.map((item, idx) => (
                  <a
                    key={`${this.props.userName}-hashtag-${idx}`}
                    style={{ marginLeft: '3px' }}
                  >
                    #{item}
                  </a>
                ))}
              {this.props.postImageUrl && (
                <div className="image is-4by3" style={{ marginTop: '10px' }}>
                  <img src={this.props.postImageUrl} alt="" />
                </div>
              )}
            </div>
            <div className="card-footer">
              <div
                className="field is-grouped is-grouped-multiline"
                style={{ marginTop: '15px' }}
              >
                <div className="control">
                  <div className="tags has-addons">
                    <a
                      className="tag is-light"
                      style={{ textDecoration: 'none' }}
                      onClick={this.handleUpVote}
                    >
                      <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                    </a>
                    <span className="tag is-info">{this.props.votes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
