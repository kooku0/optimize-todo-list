import React from "react";

const TodoItem = ({ text, done, onToggle, onRemove }) => (
  <li>
    {console.log("TodoItem", text)}
    <b
      onClick={onToggle}
      style={{
        textDecoration: done ? "line-through" : "none",
      }}
    >
      {text}
    </b>
    <button style={{ all: "unset", marginLeft: "0.5rem" }} onClick={onRemove}>
      [지우기]
    </button>
  </li>
);

export default TodoItem;
