import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { UncompleteTodos } from "./components/UncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { Color } from "three";

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
      <InputTodo
        inputTodo={inputTodo}
        onChangeInput={onChangeInput}
        onClickAddButton={onClickAddButton}
        disabled={uncompleteTodos.length >= 5}
      />
      {uncompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録可能なTODOは5つまでです。消化してください。
        </p>
      )}
      <UncompleteTodos
        uncompleteTodos={uncompleteTodos}
        onClickCompleteButton={onClickCompleteButton}
        onClickDeleteButton={onClickDeleteButton}
      />
      <CompleteTodos
        completeTodos={completeTodos}
        onClickReturnButton={onClickReturnButton}
      />
    </>
  );
};
