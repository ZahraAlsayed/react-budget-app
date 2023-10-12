import React, { useState } from 'react';
const SavingForm =()=> {
    const [target, setTarget] = useState<number>(0);
    
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTarget(Number(event.target.value));
      };
    
  
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setTarget(0);

     };
  
    
    return (
        <>
        <form onSubmit={handleSubmit} >

            <div>
                <label htmlFor='target'>Set Target </label>
                <input type='number' name='target' id='target' value={target} onChange={handleChange}/>
                
            </div>
            <button type="submit" >Reset </button>
        </form>
        <p>Currunt Saving : </p>
        <div>
            
        <div>
          <strong>Target: {target}</strong> 
        </div>
      
        </div>
        <progress max={100} value={5}/>
      </>
    );
    }
    export default SavingForm;