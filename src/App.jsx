// App.js
import React, { useState } from 'react';
import Expenses from './component/Expenses';

const App = (props) => {
  const [expenses, setExpenses] = useState([
    {
      id: 'e1',
      title: 'school fee',
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e2',
      title: 'school fee',
      amount: 250,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e3',
      title: 'school fee',
      amount: 250,
      date: new Date(2021, 5, 12),
    },
  ]);

  const handleDeleteItem = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  return (
    <div>
      <h2>lets get started</h2>
      <Expenses items={expenses} onDelete={handleDeleteItem} />
    </div>
  );
};

export default App;
