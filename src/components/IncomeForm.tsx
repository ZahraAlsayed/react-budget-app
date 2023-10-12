import React, { useState } from 'react';
import {IncomeExpenesItem} from '../type/TypeComponents'

const IncomeForm = () => {
    
  const [incomeList, setIncomeList] = useState<IncomeExpenesItem[]>([]);
  const [income, setIncome] = useState<IncomeExpenesItem>({
    source: '',
    amount: 0,
    date: '',
  });
  
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIncome((prevIncome) => {
      return { ...prevIncome, [name]: value };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if(income.source && income.amount && income.date){
    setIncomeList((prevIncomes) => {
      return [...prevIncomes, income];
    });
  };
};
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="source">Income Source</label>
          <input type="text" name="source" id="source" value={income.source} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="amount">Amount Of Income</label>
          <input type="number" name="amount" id="amount" value={income.amount} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="date">Date Of Income</label>
          <input type="date" name="date" id="date" value={income.date} onChange={handleChange} required />
        </div>
        <div>
          <button>ADD Income</button>
        </div>
      </form>
      <ul>
        {incomeList.length >0 &&
        incomeList.map((income, index) => (
          <li key={index}>
             
            {income.source} : {income.amount}RS on {income.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncomeForm;
