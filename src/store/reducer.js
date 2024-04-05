import { SET_TODO_INPUT,ADD_TODO,DELETE_TODO_INPUT } from './constans'

const initState = {
    todos: [],
    todoInput:'',
}

function reducer(state, action)
{
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos,action.payload]

            }
        case DELETE_TODO_INPUT:
            const newState = [...state.todos];
            newState.splice(action.payload, 1);
            return {
                ...state,
                todos: newState
            };
        default:
            throw new Error('Invalid action ' + action.type )
    }
}
export{initState }
export default reducer;