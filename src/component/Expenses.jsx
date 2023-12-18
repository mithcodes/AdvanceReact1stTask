// Expenses.js
import React from 'react';
import ExpensesItem from './ExpensesItem';

const Expenses = (props) => {
  const handleDelete = (id) => {
    props.onDelete(id);
  };

  return (
    <div>
      {props.items.map((item) => (
        <ExpensesItem
          key={item.id}
          id={item.id}
          date={item.date}
          title={item.title}
          amount={item.amount}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Expenses;
