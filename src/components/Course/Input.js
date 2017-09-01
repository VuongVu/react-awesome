import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  state = {
    value: this.props.value,
    error: false
  };

  componentWillReceiveProps(update) {
    this.setState({ value: update.value });
  }

  onChange = evt => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    this.props.onChange({ name, value, error });
  };

  render() {
    return (
      <div className="field">
        <label className="label">{this.props.labelContent}</label>
        <div className="control has-icons-left">
          {this.props.inputIcon && (
            <span className="icon is-small is-left">
              <i className={`fa ${this.props.inputIcon}`} />
            </span>
          )}
          <input
            className="input"
            type={this.props.inputType}
            placeholder={this.props.placeholder}
            name={this.props.name}
            value={this.state.value}
            onChange={this.onChange}
          />
        </div>
        <p className="help is-danger">{this.state.error}</p>
      </div>
    );
  }
}

Input.propTypes = {
  labelContent: PropTypes.string,
  inputIcon: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  validate: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default Input;
