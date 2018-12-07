import * as type from '../constants';
import { ITodo } from '../model/todo';

export interface TodoState {
    todos: ITodo[];
    lastUpdate: Date;
}

export const initialState: TodoState = {
    todos: [],
    lastUpdate: null
}

const todoReducer = (state = initialState, action): TodoState => {
    switch (action.type) {
        case type.ADD_TODO:
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            })

        case type.TOGGLE_TODO:
            var todo = state.todos.find(t => t.id === action.id);
            var index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, { isCompleted: !todo.isCompleted }),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdate: new Date()
            })

        case type.REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdate: new Date()
            })

        case type.REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdate: new Date()
            })

        default:
            return state;
    }

}
export default todoReducer;