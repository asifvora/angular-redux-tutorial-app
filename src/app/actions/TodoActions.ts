import * as type from '../constants';

export function clearTodos() {
    return {
        type: type.REMOVE_ALL_TODOS,
    };
}

export function addTodo(modal) {
    return {
        type: type.ADD_TODO,
        todo: modal
    };
}

export function toggleTodo(id) {
    return {
        type: type.TOGGLE_TODO,
        id: id
    };
}

export function removeTodo(id) {
    return {
        type: type.REMOVE_TODO,
        id: id
    };
}

