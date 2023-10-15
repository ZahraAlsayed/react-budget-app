import React, { useState, useCallback } from 'react';
import { IncomeExpenesItem } from '../type/TypeComponents';

type ExpensesSourceType ={
     getExpenses: (expensesSource: number) => void

}
const ExpensesForm = (props:ExpensesSourceType) => {
    const [expensesList, setExpensesList] = useState<IncomeExpenesItem[]>([]);
    const [expenses, setExpenses] = useState<IncomeExpenesItem>({
      source: '',
      amount: 0,
      date: '',
    });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setExpenses((prevIExpenes) => {
        return { ...prevIExpenes, [name]: value };
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if(expenses.source && expenses.amount && expenses.date){
    setExpensesList((prevIExpenses) => {
      return [...prevIExpenses, expenses];
    });
      
      // Clear the input fields by resetting the 'income' state
      setExpenses({
        source: '',
        amount: 0,
        date: '',
    });
    }
    props.getExpenses(expenses.amount);
  };
  const handleDelete = useCallback(
    (index:number) => {
      const updatedExpenses = expensesList.filter((_, i) => i !== index);
      setExpensesList(updatedExpenses);
    },
    [expensesList]
  );

  

  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>
        <div>
        <h3>Expenses</h3>
          <label htmlFor="source"> Expenses Source</label>
          <input type="text" name="source" id="source" value={expenses.source} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="amount">Amount Of Expenses</label>
          <input type="number" name="amount" id="amount" value={expenses.amount} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="date">Date Of Expenses</label>
          <input type="date" name="date" id="date" value={expenses.date} onChange={handleChange} required />
        </div>
        <div>
          <button>ADD Expenses</button>
        </div>
      </form>
      <ul>
        {expensesList.length > 0 &&
          expensesList.map((expenses, index) => (
            <li key={index}>
              {expenses.source} : {expenses.amount}RS on {expenses.date}
              <button className="deletbutten" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ExpensesForm;
