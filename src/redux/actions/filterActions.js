import { FILTER_TODO_ACTION } from "../constants";

export const setFilterAction = (value) => ({
    type: FILTER_TODO_ACTION,
    payload: value
});