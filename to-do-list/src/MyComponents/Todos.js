import React from "react";
import { TodoItem } from "../MyComponents/TodoItem";

export default function Todos(props) {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className="text-center my-3">ToDos List</h3>
      {props.todos.length === 0
        ? "No to dos to display "
        : props.todos.map((todo) => {
            return (
              
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                
              
            );
          })}
    </div>
  );
}
