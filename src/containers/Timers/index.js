import React, { Component } from 'react';

import TimersDashboard from '../../components/Timer/TimersDashboard';

class Timers extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Timers</h1>
              <h2 className="subtitle">Show all timers</h2>
            </div>
          </div>
        </section>

        <TimersDashboard />
      </div>
    );
  }
}

export default Timers;
