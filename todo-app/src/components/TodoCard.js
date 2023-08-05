import React from "react";
import todo from '../images/todo.png';
import { Link } from "react-router-dom";
const TodoCard = (props) => {
    const { id, name, desc } = props.todo;
    console.log("New", props.todo);


    return (
        <div className="item">
            <img className="ui avatar image" src={todo} alt="user" />
            <div className="content">
                <Link to={`/todo/${id}`} state={{ todo: props.todo }}>
                    <div className="header">{name}</div>
                    <div>{desc}</div>
                </Link>
            </div>
            <i
                className="check circle outline icon"
                style={{ color: "green", marginTop: "7px" }}
                onClick={() => props.clickHandler(id)}
            ></i>
            <Link to={`/edit`} state={{ todo: props.todo }}>
                <i
                    className="edit outline icon"
                    style={{ color: "blue", marginTop: "7px" }}

                ></i>
            </Link>
        </div>
    );
};
export default TodoCard;
