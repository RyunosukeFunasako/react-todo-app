import React from "react";

const style = {
  backgroundColor: "violet",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { inputTodo, onChangeInput, onClickAddButton, disabled } = props;
  return (
    <div style={style}>
      <input
        type="text"
        placeholder="TODOを入力"
        value={inputTodo}
        onChange={onChangeInput}
        disabled={disabled}
      />
      <button onClick={onClickAddButton} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
