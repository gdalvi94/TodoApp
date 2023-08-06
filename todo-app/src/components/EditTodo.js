import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function EditTodo({ updateTodoHandler }) {

  const location = useLocation();
  const { id, name: existingName, desc: existingDesc } = location.state.todo;
  console.log("location", location);

  const navigate = useNavigate();
  const [name, setName] = useState(existingName);
  const [desc, setDesc] = useState(existingDesc);

  const update = (e) => {
    e.preventDefault();

    if (name === "" || desc === "") {
      alert("All the fields are mandatory");
      return;
    }
    updateTodoHandler({ id, name, desc });


    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Todo</h2>
      <form className="ui form" onSubmit={update}>
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
        <button className="ui button blue">Update</button>
      </form>
    </div>
  );
}

export default EditTodo;