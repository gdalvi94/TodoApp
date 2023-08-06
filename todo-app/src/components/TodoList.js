import React, { useRef } from "react";
import { Link } from "react-router-dom";
import TodoCard from "./TodoCard";
const TodoList = (props) => {
    console.log(props);
    const inputTodo = useRef();
    const completeTodoHandler = (id) => {
        props.getTodoId(id);
    }
    const renderTodoList = props.todos.map((todo) => {
        return (
            <TodoCard todo={todo} clickHandler={completeTodoHandler} key={todo.id}></TodoCard>
        );
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputTodo.current.value);

    }
    return (
        <div className="main">
            <h2>
                Todo List
                <Link to="/add">
                    <button className="ui button blue" style={{ float: "right" }}>+</button>
                </Link>
            </h2>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>

                <div className="ui search">
                    <div className="ui icon input">
                        <input type="text" placeholder="Search Task" className="prompt" ref={inputTodo} value={props.data} onChange={getSearchTerm} />
                        <i className="search icon" ></i>
                    </div>
                </div>
            </div>
            <div className="ui celled list">
                {renderTodoList.length > 0 ? renderTodoList : "No Task Found"}
            </div>

        </div>
    );
};
export default TodoList;