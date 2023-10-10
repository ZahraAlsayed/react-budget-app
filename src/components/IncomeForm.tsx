import React, { useState } from 'react';
interface InputItem {
    incomeSource: string;
    amountOfIncome: number | string;
    dateOfIncome: string;
  }
  
  const IncomeForm = () => {
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
        incomeSource: source,
        amountOfIncome: amount,
        dateOfIncome: date,
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
                <label htmlFor='source'>Income Source</label>
                <input type='text' name='source' id='source' value={source}
                 onChange={handleTextChange}  required/>

            </div>
        
            <div>
                <label htmlFor='amount'>Amount Of Income </label>
                <input type='number' name='amount' id='amount'  value={amount}
            onChange={handleNumberChange}
            
            required/>
                
            </div>
            <div>
                <label htmlFor='date'>Date Of Income </label>
                <input type='date' name='date' id='date' value={date}
            onChange={handleDateChange}
            required/>
                
            </div>
            <div>
            <button>ADD Income </button>
            </div>
            
        </form>
        <ul>
          {inputList.map((item, index) => (
            <li key={index}>
               {item.incomeSource} :, {item.amountOfIncome},{' '}
               {item.dateOfIncome}
            </li>
          ))}
        </ul>
    </div>
)
}
export default IncomeForm;