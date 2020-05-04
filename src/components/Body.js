import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { remove, toggle } from "../store/reducers/todos";

function Body() {
  const { todoItems } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const onToggle = (id) => {
    dispatch(toggle(id));
  };
  const onRemove = (id) => {
    dispatch(remove(id));
  };

  const memo = useMemo(() => {
    console.log("Body");
  }, []);
  return (
    <>
      {console.log("Body")}
      <ul>
        {todoItems.map((todo) =>
          todo ? (
            <TodoItem
              key={todo.id}
              id={todo.id}
              done={todo.done}
              onToggle={() => onToggle(todo.id)}
              onRemove={() => onRemove(todo.id)}
              text={todo.text}
            />
          ) : null
        )}
      </ul>
    </>
  );
}

export default Body;
