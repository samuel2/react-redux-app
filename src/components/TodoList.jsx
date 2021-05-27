import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../store/todosSelectors";
import {deleteTodoAction, toggleTodoAction} from "../store/todosActions";

function TodoItem({todo, onToggle, onDelete}) {
    return (
        <li>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo)} />
                {todo.title}
                <button onClick={() => onDelete(todo)}>x</button>
            </label>
        </li>
    );
}

export function TodoList () {
    const todos = useSelector(todosSelectors);
    const dispatch = useDispatch();
    const onToggle = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    }, [dispatch]);
    const onDelete = useCallback((todo) => {
        dispatch(deleteTodoAction(todo))
    }, [dispatch]);

    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}
        </ul>
    );
}

/*
export const TodoListStore = connect(
    (state) => ({
        todos: todosSelectors(state)
    }),
    (dispatch => ({
        onToggle: todo => dispatch(toggleTodoAction(todo))
    }))
)(TodoList);
*/