import React, { Component } from 'react';

import isEmail from 'validator/lib/isEmail';

import Input from './Input';

class Form extends Component {
  state = {
    fields: {
      name: '',
      email: ''
    },
    fieldErrors: {},
    users: []
  };

  onFormSubmit = evt => {
    const users = [...this.state.users];
    const user = this.state.fields;

    evt.preventDefault();

    if (this.validate()) return;

    this.setState({
      users: users.concat(user),
      fields: { name: '', email: '' }
    });
  };

  onInputChange = ({ name, value, error }) => {
    const fields = this.state.fields;
    const fieldErrors = this.state.fieldErrors;

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
  };

  validate = () => {
    const user = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);

    if (!user.name) return true;
    if (!user.email) return true;
    if (errMessages.length) return true;

    return false;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <section className="hero is-fullheight is-light is-bold">
            <div className="hero-body">
              <div className="container">
                <div className="column is-vcentered">
                  <div className="column is-6 is-offset-3">
                    <h1 className="title has-text-centered">
                      Sign in to React Awesome
                    </h1>
                    <h2 className="subtitle has-text-centered">
                      Come with us :)
                    </h2>
                    <div className="box">
                      <Input
                        labelContent="Name"
                        inputIcon="fa-user"
                        inputType="text"
                        placeholder="This is your name."
                        name="name"
                        value={this.state.fields.name}
                        onChange={this.onInputChange}
                        validate={val => (val ? false : 'name Required')}
                      />
                      <Input
                        labelContent="Email"
                        inputIcon="fa-lock"
                        inputType="text"
                        placeholder="This is your email."
                        name="email"
                        value={this.state.fields.email}
                        onChange={this.onInputChange}
                        validate={val =>
                          isEmail(val) ? false : 'Invalid email'}
                      />
                      <hr />
                      <p className="control">
                        <input
                          type="submit"
                          value="Sign in"
                          className="button is-success"
                          disabled={this.validate()}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>

        <div className="container">
          <div className="column is-vcentered has-text-centered">
            <div className="column is-6 is-offset-3">
              <p className="title">List users</p>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users.map(({ name, email }, idx) => (
                    <tr key={idx}>
                      <th>{name}</th>
                      <th>{email}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
