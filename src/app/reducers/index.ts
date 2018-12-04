import { combineReducers } from "redux";
import todoReducer from './todoReducer';

// const reducer = todoReducer;
const reducer = combineReducers({
    todos: todoReducer
});

export default reducer;