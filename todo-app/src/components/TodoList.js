import React from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";
const TodoList = (props) => {

    const completeTodoHandler = (id) => {
        props.getTodoId(id);
    }
    const renderTodoList = props.todos.map((todo) => {
        return (
            <TodoCard todo={todo} clickHandler={completeTodoHandler} key={todo.id}></TodoCard>
        );
    });
    return (
        <div className="main">
            <h2>
                Todo List
                <Link to="/add">
                    <button className="ui button blue" style={{ float: "right" }}>Add Task</button>
                </Link>
            </h2>
            <div className="ui celled list">
                {renderTodoList}
            </div>

        </div>
    );
};
export default TodoList;