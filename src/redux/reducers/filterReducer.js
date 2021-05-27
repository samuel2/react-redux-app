import { FILTER_TODO_ACTION } from "../constants";

export function filterReducer(state = null, action) {
    switch (action.type) {
        case FILTER_TODO_ACTION:
            return action.payload;
        default:
            return state;
    }
}