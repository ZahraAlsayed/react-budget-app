import {IncomeExpenesItem} from '../type/TypeComponents'
import React, { useState } from 'react';

const ExpensesForm = () => {
    const [expensesList, setExpensesList] = useState<IncomeExpenesItem[]>([]);
    const [expenses, setExpenses] = useState<IncomeExpenesItem>({
      source: '',
      amount: 0,
      date: '',
    });
    
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setExpenses((prevIncome) => {
        return { ...prevIncome, [name]: value };
      });
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if(expenses.source && expenses.amount && expenses.date){
      setExpensesList((prevIncomes) => {
        return [...prevIncomes, expenses];
      });
    };
};
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="source">Income Source</label>
            <input type="text" name="source" id="source" value={expenses.source} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="amount">Amount Of Income</label>
            <input type="number" name="amount" id="amount" value={expenses.amount} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="date">Date Of Income</label>
            <input type="date" name="date" id="date" value={expenses.date} onChange={handleChange} required />
          </div>
          <div>
            <button>ADD Income</button>
          </div>
        </form>
        <ul>
        {expensesList.length >0 &&
        expensesList.map((expenses, index) => (
          <li key={index}>
             
            {expenses.source} : {expenses.amount}RS on {expenses.date}
          </li>
        ))}
      </ul>
      </div>
    );
  }
  
  export default ExpensesForm;