// @flow

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED,
} from '../constants/ActionTypes'

type State = {
  id: string,
  text: string,
  completed: boolean,
}

type Action = {
  type: string,
  id: string,
  text: string,
}

export default function todos(state: State[] = [], action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case EDIT_TODO:
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo),
      )
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id)
    case COMPLETE_TODO:
      return state.map(
        todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo,
      )
    case COMPLETE_ALL:
      const allDone = state.every(todo => todo.completed)
      return state.map(todo => ({
        ...todo,
        completed: !allDone,
      }))
    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false)

    default:
      return state
  }
}
