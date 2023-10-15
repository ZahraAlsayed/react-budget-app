import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import IncomeForm from './components/IncomeForm';
import ExpensesForm from './components/ExpensesForm';
import SavingForm from './components/SavingForm';
import TransferTarget from './components/TransferTarget';
import './App.css';

const BudgetApp =()=>{
    const [transSavingAmount, setTransSavingAmount] = useState(0);
    const [currentIncome, setCurrentIncome] = useState(0);
    const [currentExpenses, setCurrentExpenses] = useState(0);
    const [curruntBalance, setcurruntBalancet] = useState(0);
  
  
    const getSavingAmount = (savingAmount: number ) => {
      setTransSavingAmount(savingAmount);
   
    }
    const getIncome = (incomeSallry: number) => {
      setCurrentIncome(incomeSallry);
    }
    const getExpenses = (expensesSource: number) => {
      setCurrentExpenses(expensesSource);
      
    }
    const getSaving=(savingAmount :number)=>{
     setcurruntBalancet(savingAmount);
    }
  
    return (
      <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Budget Control App</title>
        </Helmet>
      <div className="container">
  
        <IncomeForm getIncome={getIncome} />
        <ExpensesForm getExpenses={getExpenses} />
        <SavingForm transSavingAmount={transSavingAmount } getSaving={getSaving} />
        <TransferTarget getSavingAmount={getSavingAmount} currentIncome={currentIncome} currentExpenses={currentExpenses} curruntBalance={curruntBalance} />
      </div>
      </div>
    );
  };
  
  export default BudgetApp;
  