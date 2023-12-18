// ExpensesItem.js
import React, { useState } from "react";
import ExpensesDate from "./ExpensesDate";
import './ExpensesItem.css';

const ExpensesItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [newTitle, setNewTitle] = useState("hi");

  const changeHandler = (event) => {
    setNewTitle(event.target.value);
  };

  const clickHandler = () => {
    setTitle(newTitle);
  };

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expenses-item-description">
        <h2>{title}</h2>
        <div className="expenses-item_price">₹{props.amount}</div>
      </div>
      <div>
        <input type="text" value={newTitle} onChange={changeHandler} />
        <button onClick={clickHandler}>change title</button>
        <button onClick={deleteHandler}>delete</button>
      </div>
    </div>
  );
};

export default ExpensesItem;
