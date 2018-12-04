import * as type from '../constants';

export function clearTodos() {
    return {
        type: type.REMOVE_ALL_TODOS,
    };
}
