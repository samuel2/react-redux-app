import { createStore, combineReducers } from "redux";
import { filterReducer } from "../reducers/filterReducer";
import { todosReducer } from "../reducers/todosReducer";

export default createStore(
    combineReducers({
        todos: todosReducer,
        filter: filterReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);