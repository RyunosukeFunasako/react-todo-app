import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [inputTodo, setInputTodo] = useState("");
  const [uncompleteTodos, setUncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeInput = (event) => setInputTodo(event.target.value);
  const onClickAddButton = () => {
    if (inputTodo === "") return;
    const newUncompleteTodos = [...uncompleteTodos, inputTodo];
    setUncompleteTodos(newUncompleteTodos);
    setInputTodo("");
  };
  const onClickDeleteButton = (index) => {
    const newUncompleteTodos = [...uncompleteTodos];
    newUncompleteTodos.splice(index, 1);
    setUncompleteTodos(newUncompleteTodos);
  };
  const onClickCompleteButton = (index) => {
    const newUncompleteTodos = [...uncompleteTodos];
    newUncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, uncompleteTodos[index]];
    setUncompleteTodos(newUncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickReturnButton = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newUncompleteTodos = [...uncompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setUncompleteTodos(newUncompleteTodos);
  };
  return (
    <>
       <div className="input-area">
        <input type="text" placeholder="TODOを入力" value={inputTodo} onChange={onChangeInput} />
        <button onClick={onClickAddButton}>追加</button>
       </div>
       <div className="uncomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {uncompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="todo">
                <li>{todo}</li>
                <button onClick={() => onClickCompleteButton(index)}>完了</button>
                <button onClick={() => onClickDeleteButton(index)}>削除</button>
              </div>     
            )
          })}
        </ul>
       </div>
       <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="todo">
                <li>{todo}</li>
                <button onClick={() => onClickReturnButton(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
       </div>
    </>
  );
};