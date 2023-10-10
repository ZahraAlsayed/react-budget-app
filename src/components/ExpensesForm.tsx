import React, { useState } from 'react';
    interface InputItem {
        expenesSource: string;
        amountOfExpenses: number | string;
        dateOfExpenses: string;
      }
      
      const ExpensesForm =()=>  {
        const [inputList, setInputList] = useState<InputItem[]>([]);
        const [source, setSource] = useState<string>('');
        const [amount, setAmount] = useState<number| string>('');
        const [date, setDate] = useState<string>('');
      
        const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setSource(event.target.value);
        };
      
        const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = event.target.value;
          if (/^\d*$/.test(newValue) || newValue === '') {
            setAmount(newValue);
          }
        };
      
        const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          setDate(event.target.value);
        };
      
        const handleSubmit = (event: React.FormEvent) => {
          event.preventDefault();
      
          // Create a new input item and add it to the list
          const newItem: InputItem = {
            expenesSource: source,
            amountOfExpenses: amount,
            dateOfExpenses: date,
          };
      
          setInputList([...inputList, newItem]);
      
          // Clear input values
          setSource('');
          setAmount('');
          setDate('');
        };
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='source'>Expenses Source</label>
                <input type='text' name='source' id='source'value={source}
                 onChange={handleTextChange}  required />

            </div>
        
            <div>
                <label htmlFor='amount'>Amount Of Expenses </label>
                <input type='number' name='amount' id='amount' value={amount}
                onChange={handleNumberChange} required/>
                
            </div>
            <div>
                <label htmlFor='date'>Date Of Expenses </label>
                <input type='date' name='date' id='date'  value={date}
                onChange={handleDateChange} required/>
                
            </div>
            <button>ADD Epenses </button>

        </form>
        <ul>
          {inputList.map((item, index) => (
            <li key={index}>
               {item.expenesSource} :, {item.amountOfExpenses},{' '}
               {item.dateOfExpenses}
            </li>
          ))}
        </ul>
    </div>
    )
    }
    export default ExpensesForm;