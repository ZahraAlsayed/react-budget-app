import React, { useState } from 'react';
import { IncomeExpenesItem } from '../type/TypeComponents';


type incomeSallryType ={
    getIncome: (incomeSallry: number) => void
}
const IncomeForm = (props:incomeSallryType ) => {
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
    if (income.source && income.amount && income.date) {
      setIncomeList((prevIncomes) => {
        return [...prevIncomes, income];
      });
      
      // Clear the input fields by resetting the 'income' state
      setIncome({
        source: '',
        amount: 0,
        date: '',
      });
      props.getIncome(income.amount);
    }
  };

  const handleDelete = (index: number) => {
    const updatedIncomeList = incomeList.filter((_, i) => i !== index);
    setIncomeList(updatedIncomeList);
  };

  return (
    <div className="form-container" >
      <form onSubmit={handleSubmit}>
        <div >
        <h3>Incomes</h3>
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
        {incomeList.length > 0 &&
          incomeList.map((income, index) => (
            <li key={index}>
              {income.source} : {income.amount}RS on {income.date}
              <button className="deletbutten" onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default IncomeForm;
