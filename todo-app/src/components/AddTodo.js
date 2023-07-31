import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTodo({ addTodoHandler }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (name === "" || desc === "") {
      alert("All the fields are mandatory");
      return;
    }
    addTodoHandler({ name, desc });

    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Todo</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Task Title</label>
          <input
            type="text"
            name="name"
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Description</label>
          <input
            type="text"
            name="desc"
            placeholder="description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
