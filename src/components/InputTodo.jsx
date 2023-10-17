import React from "react";

export const InputTodo = (props) => {
  const { inputTodo, onChangeInput, onClickAddButton } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInput}
      />
      <button onClick={onClickAddButton}>追加</button>
    </div>
  );
};
