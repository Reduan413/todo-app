import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    alert("Have you completed the task?");
    setTodos(updatedTodos);
  };
  const removeTodo = (id) => {
    const removeTodoArr = [...todos].filter((todo) => todo.id !== id);
    alert("Are you want to delete the task?");
    setTodos(removeTodoArr);
  };
  return (
    <div className="flex h-screen justify-center items-center login-body">
      <div className="card bg-base-100 shadow-xl" style={{ width: 550 }}>
        <div className="card-body ml-8">
          <h1 className="text-center text-2xl font-bold">
            What's the plan for today
          </h1>
          <TodoForm onSubmit={addTodo} />
          <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
