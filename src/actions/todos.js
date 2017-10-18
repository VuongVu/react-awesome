// @flow

import uuid from 'uuid'
import * as types from '../constants/ActionTypes'

const addTodo = (text: string) => ({
  type: types.ADD_TODO,
  id: uuid.v4(),
  text,
})
const editTodo = (id: string, text: string) => ({
  type: types.EDIT_TODO,
  id,
  text,
})
const deleteTodo = (id: string) => ({ type: types.DELETE_TODO, id })
const completeTodo = (id: string) => ({ type: types.COMPLETE_TODO, id })
const completeAll = () => ({ type: types.COMPLETE_ALL })
const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })

export default {
  addTodo,
  editTodo,
  deleteTodo,
  completeTodo,
  completeAll,
  clearCompleted,
}
