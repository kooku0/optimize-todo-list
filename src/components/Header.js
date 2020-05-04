import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../store/reducers/todos";

function Header() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const onChange = (e) => {
    const { value } = e.currentTarget;
    setInput(value);
  };
  return (
    <>
      {console.log("Header")}
      <h1>오늘 뭐하지?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(create(input));
          setInput("");
        }}
      >
        <input onChange={onChange} value={input} />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
}

export default Header;
