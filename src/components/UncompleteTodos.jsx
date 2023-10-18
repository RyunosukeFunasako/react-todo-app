import React from "react";

const style = {
  backgroundColor: "violet",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

export const UncompleteTodos = (props) => {
  const { uncompleteTodos, onClickCompleteButton, onClickDeleteButton } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {uncompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="todo">
              <li>{todo}</li>
              <button onClick={() => onClickCompleteButton(index)}>完了</button>
              <button onClick={() => onClickDeleteButton(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
