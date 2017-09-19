import React, { Component } from 'react';

function createStore(reducer, initialState) {
  let state = initialState;
  const listeners = [];

  const subscribe = listener => listeners.push(listener);

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(l => l());
  };

  return {
    subscribe,
    getState,
    dispatch
  };
}

function reducer(state, action) {
  if (action.type === 'ADD_MESSAGE') {
    return {
      messages: state.messages.concat(action.message)
    };
  } else if (action.type === 'DELETE_MESSAGE') {
    return {
      messages: [
        ...state.messages.slice(0, action.index),
        ...state.messages.slice(action.index + 1, state.messages.length)
      ]
    };
  } else {
    return state;
  }
}

const initialState = { messages: [] };
const listener = () => {
  console.log('Current state: ');
  console.log(store.getState());
};

const store = createStore(reducer, initialState);
store.subscribe(listener);

class Chat extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    const messages = store.getState().messages;

    return (
      <div>
        <div className="container" style={{ marginTop: '50px' }}>
          <p className="title is-1 has-text-centered">Chat with yourself</p>

          <hr />

          <div className="column is-6 is-offset-3">
            <div className="card">
              <div className="card-content">
                <div className="content">
                  <MessageView messages={messages} />
                  <MessageInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class MessageView extends Component {
  handleClick = index => {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index
    });
  };

  render() {
    const messages = this.props.messages.map((message, index) => {
      return (
        <li key={index} onClick={() => this.handleClick(index)}>
          {message}
        </li>
      );
    });

    return (
      <ul className="has-text-centered" style={{ listStyle: 'none' }}>
        {messages}
      </ul>
    );
  }
}

class MessageInput extends Component {
  state = {
    value: ''
  };

  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.state.value
    });

    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <div className="field has-addons">
        <div className="control is-expanded">
          <input
            type="text"
            className="input"
            placeholder="Send something to me :)"
            onChange={this.onChange}
            value={this.state.value}
          />
        </div>
        <div className="control">
          <a className="button is-primary" onClick={this.handleSubmit}>
            Send
          </a>
        </div>
      </div>
    );
  }
}

export default Chat;
