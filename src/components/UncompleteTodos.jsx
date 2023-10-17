import React from "react";

export const UncompleteTodos = (props) => {
  const { uncompleteTodos, onClickCompleteButton, onClickDeleteButton } = props;
  return (
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
          );
        })}
      </ul>
    </div>
  );
};
