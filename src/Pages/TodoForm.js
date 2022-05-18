import React, { useState } from "react";

const TodoForm = ({onSubmit}) => {
  const [input, setInput] = useState("");

  const handleChange =(e) =>{
      setInput(e.target.value)
  }

  const handleSubmit =(e) =>{
      e.preventDefault();
      onSubmit({
          id: Math.floor(Math.random()*10000),
          text: input
      })
      setInput('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        name="text"
        value={input}
        onChange={handleChange}
        class="input input-bordered w-full max-w-xs"
      />
      <button class="btn btn-outline btn-secondary ml-2">Add Todo</button>
    </form>
  );
};

export default TodoForm;
