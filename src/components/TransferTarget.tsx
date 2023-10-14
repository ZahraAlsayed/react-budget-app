import React, { useState } from 'react';


type TransferTargetType = {
  getSavingAmount: (savingAmount: number) => void;
  curruntBalance: number;
  currentIncome: number;
  currentExpenses: number;
};

const TransferTarget = (props: TransferTargetType) => {
  const [transfer, setTransfer] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransfer(Number(event.target.value));
  };

  const calculateBalance = (income: number, expenses: number, saving: number) => {
    const balance = income - expenses - saving;
    return balance; // Return the calculated balance
  };

  const income = props.currentIncome;
  const expenses = props.currentExpenses;
  const saving = props.curruntBalance;

  // Calculate the balance using the calculateBalance function
  const calculatedBalance = calculateBalance(income, expenses, saving);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    props.getSavingAmount(transfer);
    setTransfer(0);
  };

  return (
    <div className="form-container">
      <div>
        <p>Currunt balance: {calculatedBalance} </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='transfer' >Transfer to saving Account </label>
          <input
            type='number'
            name='transfer'
            id='transfer'
            value={transfer}
            onChange={handleChange}
          />
        </div>
        <button>Transfer</button>
      </form>
    </div>
  );
};

export default TransferTarget;
