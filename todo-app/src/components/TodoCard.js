import React from "react";
import todo from '../images/todo.png';
const TodoCard = (props) =>{
    const {id,name,desc} = props.todo;
    return(
        <div className = "item">
            <img className="ui avatar image" src = {todo} alt="user"/>
        <div className = "content">
            <div className="header">{name}</div>
            <div>{desc}</div>
        </div>
        <i className="check circle outline icon" style={{color:"green", marginTop:"7px"}} onClick={() => props.clickHandler(id)}></i>
    </div>
    );
};
export default TodoCard;