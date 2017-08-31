import React, { Component } from 'react';

import helpers from '../../helpers';

class Timer extends Component {
  render() {
    const elapsedString = helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );

    return (
      <div className="column is-one-third is-offset-one-third">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content has-text-center">
                <p className="title is-4 is-bold">{this.props.title}</p>
                <p className="subtitle is-6">{this.props.project}</p>
              </div>
            </div>
            <div className="content has-text-centered">
              <p className="title">{elapsedString}</p>
              <div className="has-text-right">
                <a className="tag is-light" style={{ textDecoration: 'none' }}>
                  <i className="fa fa-2x fa-trash" aria-hidden="true" />
                </a>
                <a className="tag is-light" style={{ textDecoration: 'none' }}>
                  <i className="fa fa-2x fa-pencil-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a className="card-footer-item button is-outlined is-success">
              Start
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Timer;
