// @flow

import React, { Component } from 'react';

import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  state = {
    isOpen: false
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    if (this.state.isOpen) {
      return <TimerForm />;
    } else {
      return <PlusButton handleFormOpen={this.handleFormOpen} />;
    }
  }
}

class PlusButton extends Component {
  render() {
    return (
      <div className="has-text-centered">
        <a className="button is-primary" onClick={this.props.handleFormOpen}>
          <i className="fa fa-plus" />
        </a>
      </div>
    );
  }
}

export default ToggleableTimerForm;
