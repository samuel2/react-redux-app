import React from "react";
import { connect } from "react-redux";
import {todosSelectors} from "../store/todosSelectors";
import {toggleTodoAction} from "../store/todosActions";

function TodoItem({todo, onToggle}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
                {todo.title}
            </label>
        </li>
    );
}

export function TodoList ({todos, onToggle}) {
    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} key={todo.id} />)}
        </ul>
    );
}

export const TodoListStore = connect(
    (state) => ({
        todos: todosSelectors(state)
    }),
    (dispatch => ({
        onToggle: todo => dispatch(toggleTodoAction(todo))
    }))
)(TodoList);