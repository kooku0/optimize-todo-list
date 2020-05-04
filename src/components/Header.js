import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { create, changeInput } from "../store/reducers/todos";

function Header() {
  const dispatch = useDispatch();
  const { input } = useSelector((state) => state.todos);
  const onChange = (e) => {
    const { value } = e.currentTarget;
    dispatch(changeInput(value));
  };
  return (
    <>
      {console.log("Header")}
      <h1>오늘 뭐하지?</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(create(input));
        }}
      >
        <input onChange={onChange} value={input} />
        <button type="submit">추가하기</button>
      </form>
    </>
  );
}

export default Header;
