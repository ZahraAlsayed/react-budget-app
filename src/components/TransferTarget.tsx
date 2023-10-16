import React, { useState } from 'react';


type TransferTarget = {
  getSavingAmount: (savingAmount: number) => void;
  curruntBalance: number;
  currentIncome: number;
  currentExpenses: number;
};

const TransferTarget = ({ getSavingAmount, curruntBalance, currentIncome, currentExpenses }: TransferTarget) => {
  const [transfer, setTransfer] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTransfer =Number(event.target.value)
    setTransfer(newTransfer);
  };
  const calculatedBalance = currentIncome - currentExpenses - curruntBalance;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    getSavingAmount(transfer);
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
