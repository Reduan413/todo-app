import React from "react";
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { RiCloseCircleLine } from 'react-icons/ri';


const Todo = ({todos, completeTodo, removeTodo}) => {
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
        <div key={todo.id} >
            {todo.text}
        </div>
        <div className="icons">
            <RiCloseCircleLine
            onClick={()=> removeTodo(todo.id)}
            className='delete-icon'
            />
            <AiOutlineCheckCircle
            onClick={() => completeTodo(todo.id)}
            className='update-icon'
            />
        </div>
    </div>
  ));
};

export default Todo;
