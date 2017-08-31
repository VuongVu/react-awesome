import React, { Component } from 'react';

class TimerForm extends Component {
  state = {
    title: this.props.title || '',
    project: this.props.project || ''
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleProjectChange = e => {
    this.setState({ project: e.target.value });
  };

  render() {
    const submitText = this.props.title ? 'Update' : 'Create';

    return (
      <div className="column is-one-third is-offset-one-third">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="field">
                <label className="label">Title</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Project</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    value={this.state.project}
                    onChange={this.handleProjectChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className="card-footer">
            <a
              className={`card-footer-item button is-outlined ${this.state.title
                ? 'is-info'
                : 'is-primary'}`}
            >
              {submitText}
            </a>
            <a className="card-footer-item button is-outlined is-danger">
              Cancel
            </a>
          </footer>
        </div>
      </div>
    );
  }
}

export default TimerForm;
