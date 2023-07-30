import React from "react";
import TodoCard from "./TodoCard";
const TodoList = (props) => {
    const completeTodoHandler = (id) => {
        props.getTodoId(id);
    }
    const renderTodoList = props.todos.map((todo) => {
        return (
            <TodoCard todo = {todo} clickHandler = {completeTodoHandler} key={todo.id}></TodoCard>
        );
    });
    return (
        <div className="ui celled list">
            {renderTodoList}
        </div>
    );
};
export default TodoList;