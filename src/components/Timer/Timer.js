import React, { Component } from 'react';

import helpers from '../../helpers';

class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };

  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };

  handleRemoveClick = () => {
    this.props.onRemoveClick(this.props.id);
  };

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
                <a
                  className="tag is-light"
                  style={{ textDecoration: 'none' }}
                  onClick={this.handleRemoveClick}
                >
                  <i className="fa fa-2x fa-trash" aria-hidden="true" />
                </a>
                <a
                  className="tag is-light"
                  style={{ textDecoration: 'none' }}
                  onClick={this.props.onEditClick}
                >
                  <i className="fa fa-2x fa-pencil-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <TimerActionButton
              timerIsRunning={!!this.props.runningSince}
              onStartClick={this.handleStartClick}
              onStopClick={this.handleStopClick}
            />
          </footer>
        </div>
      </div>
    );
  }
}

const TimerActionButton = ({ timerIsRunning, onStopClick, onStartClick }) => {
  if (timerIsRunning) {
    return (
      <a
        className="card-footer-item button is-outlined is-danger"
        onClick={onStopClick}
      >
        Stop
      </a>
    );
  } else {
    return (
      <a
        className="card-footer-item button is-outlined is-success"
        onClick={onStartClick}
      >
        Start
      </a>
    );
  }
};

export default Timer;
