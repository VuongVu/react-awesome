import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <section className="todoapp">
          <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" />
          </header>
          <section className="main">
            <ul className="todo-list">
              <li className="completed">
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={true}
                    onChange={value => console.log(value)}
                  />
                  <label>Taste JavaScript</label>
                  <button className="destroy" />
                </div>
              </li>
              <li>
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>Buy a unicorn</label>
                  <button className="destroy" />
                </div>
                <input
                  className="edit"
                  value="Rule the web"
                  onChange={value => console.log(value)}
                />
              </li>
            </ul>
          </section>
          <footer className="footer">
            <span className="todo-count">
              <strong>0</strong> item left
            </span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">
                  All
                </a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>
      </div>
    )
  }
}

const Todo = ({ onClick, onRemove, complete, text }) => (
  <li className={complete && 'completed'}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={complete ? true : false}
        onChange={onClick}
      />
      <label>{text}</label>
      <button className="destroy" onClick={onClick} />
    </div>
  </li>
)

const TodoList = ({ todos, onTodoClick, onTodoRemove }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <Todo
        key={todo.id}
        onClick={() => onTodoClick(todo.id)}
        onRemove={() => onTodoRemove(todo.id)}
      />
    ))}
  </ul>
)

export default App
