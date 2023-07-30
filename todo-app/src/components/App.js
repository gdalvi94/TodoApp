import './App.css';
import {v4 as uuid} from "uuid";
import Header from  "./Header";
import AddTodo from "./AddTodo";
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
      <Header/>
      <AddTodo addTodoHandler = {addTodoHandler}/>
      <TodoList todos = {todos} getTodoId = {removeTodoHandler}/>
    </div>
  );
}

export default App;
