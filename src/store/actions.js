import { SET_TODO_INPUT,ADD_TODO,DELETE_TODO_INPUT } from './constans'
export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload,
})
export const addTodo= payload => ({
    type: ADD_TODO,
    payload,
})
export const deleteTodoInput = (payload) => ({
    type: DELETE_TODO_INPUT,
    payload
  });
  