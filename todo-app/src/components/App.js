import './App.css';
import {v4 as uuid} from "uuid";
import Header from  "./Header";
import AddTodo from "./AddTodo";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TodoList from "./TodoList";
import { useState,useEffect } from 'react';
function App() {
  const LOCAL_STORAGE_KEY = "todos";
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ??  []);
  
  const addTodoHandler = (todo) =>{
    console.log(todo);
    setTodos([...todos, {id: uuid(), ...todo}]);
  }
  // useEffect(() => {
  //   const retriveTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if(retriveTodos) setTodos(retriveTodos);
  // }, []);
  const removeTodoHandler = (id) => {
    const newTodoList = todos.filter((todo) => {
      return todo.id !==id;
    });
    setTodos(newTodoList);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="ui container">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<TodoList todos={todos} getTodoId={removeTodoHandler} />} />
      <Route path="/add" element={<AddTodo addTodoHandler={addTodoHandler} />} />      </Routes>
      {/* <AddTodo addTodoHandler = {addTodoHandler}/>
      <TodoList todos = {todos} getTodoId = {removeTodoHandler}/> */}
      </Router>
    </div>
  );
}

export default App;
