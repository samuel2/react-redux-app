import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {todosSelectors} from "../redux/store/todosSelectors";
import {deleteTodoAction, toggleTodoAction} from "../redux/actions/todosActions";
import {filterTodoSelector} from "../redux/store/filterSelector";

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

export function TodoList ({todos, onToggle, onDelete}) {
    return (
        <ul>
            {todos.map(todo => <TodoItem todo={todo} onToggle={onToggle} onDelete={onDelete} key={todo.id} />)}
        </ul>
    );
}

export function TodoListStore() {
    const todos = useSelector(filterTodoSelector);
    const dispatch = useDispatch();
    
    const onToggle = useCallback((todo) => {
        dispatch(toggleTodoAction(todo))
    }, [dispatch]);
    
    const onDelete = useCallback((todo) => {
        dispatch(deleteTodoAction(todo))
    }, [dispatch]);
    
    return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
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