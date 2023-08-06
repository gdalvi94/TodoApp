import React, { useEffect, useState } from "react";
import task from '../images/task.jpeg';
import { Link, useParams } from "react-router-dom";
import api from "../api/todos";

const TodoDetails = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchTodoDetails = async () => {
            try {
                // Assuming you have stored your todos in local storage
                // const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

                const response = await api.get(`/todos/${id}`);
                const { name, desc } = response.data;

                // Find the todo with the matching 'id' in the local storage data
                // const foundTodo = todosFromLocalStorage.find(todo => todo.id === id);

                if (!response.data) {
                    setError("Todo not found");
                    return;
                }
                setTodo(response.data);
            } catch (error) {
                console.error("Error fetching todo details:", error);
                setError("Error fetching todo details");
            }
        };

        fetchTodoDetails();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!todo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={task} alt="task"></img>
                </div>
                <div className="content">
                    <div className="header">
                        {todo.name}
                    </div>
                    <div className="desc">
                        {todo.desc}
                    </div>
                </div>
            </div>
            <div className="center-div" style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/">
                    <button className="ui button blue" >Back to Todo List</button>
                </Link>
            </div>
        </div>
    );
};

export default TodoDetails;
