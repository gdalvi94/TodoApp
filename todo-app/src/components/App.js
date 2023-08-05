import './App.css';
import { v4 as uuid } from "uuid";
import Header from "./Header";
import AddTodo from "./AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./TodoList";
import TodoDetails from './TodoDetails';
import { useState, useEffect } from 'react';
import api from "../api/todos";
import EditTodo from './EditTodo';
function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState([]);
  // Retrive todos
  const retrieveTodos = async () => {
    const response = await api.get("/todos");
    console.log(response);
    return response.data;
  };
  const addTodoHandler = async (todo) => {
    console.log(todo);
    const request = {
      id: uuid(),
      ...todo
    }
    const response = await api.post("/todos", request)
    setTodos([...todos, response.data]);
  };
  const updateTodoHandler = () => {

  };
  const removeTodoHandler = async (id) => {
    await api.delete(`/todos/${id}`);
    const newTodoList = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodoList);
  };
  useEffect(() => {
    // const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if(retriveTodos) setTodos(retriveTodos);
    const getAllTodos = async () => {
      const allTodos = await retrieveTodos();
      if (allTodos) setTodos(allTodos);
    };
    getAllTodos();
  }, []);
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TodoList todos={todos} getTodoId={removeTodoHandler} />} />
          <Route path="/add" element={<AddTodo addTodoHandler={addTodoHandler} />} />
          <Route path="/edit" element={<EditTodo todos={todos} updateTodoHandler={updateTodoHandler} />} />
          <Route path="/todo/:id" element={<TodoDetails />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
