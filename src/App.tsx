import React, { useState } from 'react';
import IncomeForm from './components/IncomeForm';
import ExpensesForm from './components/ExpensesForm';
import SavingForm from './components/SavingForm';
import TransferTarget from './components/TransferTarget';

function App() {
  return (
  <div>
    <IncomeForm/>
    <ExpensesForm/>
    <SavingForm/>
    <TransferTarget/>
  </div>);
};

export default App;
