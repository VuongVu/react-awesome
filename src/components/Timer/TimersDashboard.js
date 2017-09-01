import React, { Component } from 'react';

import client from '../../containers/Timers/client';
import helpers from '../../helpers';

import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';

class TimersDashboard extends Component {
  state = {
    timers: []
  };

  componentDidMount() {
    this.loadTimersFromServer();
    setInterval(this.loadTimersFromServer, 5000);
  }

  loadTimersFromServer = () => {
    client.getTimers(serverTimers => this.setState({ timers: serverTimers }));
  };

  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };

  handleEditFormSubmit = attrs => {
    this.updateTimer(attrs);
  };

  handleRemoveClick = timerId => {
    this.removeTimer(timerId);
  };

  handleStartClick = timerId => {
    this.startTimer(timerId);
  };

  handleStopClick = timerId => {
    this.stopTimer(timerId);
  };

  createTimer = timer => {
    const t = helpers.newTimer(timer);

    // this.setState({
    //   timers: this.state.timers.concat(t)
    // });

    client.createTimer(t).then(this.loadTimersFromServer);
  };

  updateTimer = attrs => {
    // this.setState({
    //   timers: this.state.timers.map(timer => {
    //     if (timer.id === attrs.id) {
    //       return Object.assign({}, timer, {
    //         title: attrs.title,
    //         project: attrs.project
    //       });
    //     } else {
    //       return timer;
    //     }
    //   })
    // });

    client.updateTimer(attrs).then(this.loadTimersFromServer);
  };

  removeTimer = timerId => {
    // this.setState({
    //   timers: this.state.timers.filter(t => t.id !== timerId)
    // });

    client.deleteTimer(timerId).then(this.loadTimersFromServer);
  };

  startTimer = timerId => {
    const now = Date.now();

    // this.setState({
    //   timers: this.state.timers.map(timer => {
    //     if (timer.id === timerId) {
    //       return Object.assign({}, timer, {
    //         runningSince: now
    //       });
    //     } else {
    //       return timer;
    //     }
    //   })
    // });

    client
      .startTimer({ id: timerId, start: now })
      .then(this.loadTimersFromServer);
  };

  stopTimer = timerId => {
    const now = Date.now();

    // this.setState({
    //   timers: this.state.timers.map(timer => {
    //     if (timer.id === timerId) {
    //       const lastElapsed = now - timer.runningSince;

    //       return Object.assign({}, timer, {
    //         elapsed: timer.elapsed + lastElapsed,
    //         runningSince: null
    //       });
    //     } else {
    //       return timer;
    //     }
    //   })
    // });

    client
      .stopTimer({ id: timerId, stop: now })
      .then(this.loadTimersFromServer);
  };

  render() {
    return (
      <div>
        <EditableTimerList
          timers={this.state.timers}
          onFormSubmit={this.handleEditFormSubmit}
          onRemoveClick={this.handleRemoveClick}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
      </div>
    );
  }
}

export default TimersDashboard;
