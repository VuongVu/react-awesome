import React, { Component } from 'react';

import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer
        key={timer.id}
        {...timer}
        onFormSubmit={this.props.onFormSubmit}
        onRemoveClick={this.props.onRemoveClick}
        onStartClick={this.props.onStartClick}
        onStopClick={this.props.onStopClick}
      />
    ));

    return <div id="timers">{timers}</div>;
  }
}

export default EditableTimerList;
