export const filterSelector = ({filter}) => filter;

export const filterTodoSelector = ({todos, filter}) => {
    if (filter === null) {
        return todos;
    } else {
        return todos.filter(todo => todo.completed === filter);
    }
}