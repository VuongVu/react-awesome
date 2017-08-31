import React, { Component } from 'react';

import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    const timers = this.props.timers.map(timer => (
      <EditableTimer key={timer.id} {...timer} />
    ));

    return <div id="timers">{timers}</div>;
  }
}

export default EditableTimerList;
