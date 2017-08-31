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

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = timer => {
    this.props.onFormSubmit(timer);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <TimerForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return <PlusButton handleFormOpen={this.handleFormOpen} />;
    }
  }
}

const PlusButton = ({ handleFormOpen }) => {
  return (
    <div className="has-text-centered">
      <a className="button is-primary" onClick={handleFormOpen}>
        <i className="fa fa-plus" />
      </a>
    </div>
  );
};

export default ToggleableTimerForm;
