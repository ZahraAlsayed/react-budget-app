import React, { useState } from 'react';
const SavingForm =()=> {
    const [target, setTarget] = useState<number | string>('');
    const [displayedTarget, setDisplayedTarget] = useState<number | string>('');
  
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      if (/^\d*$/.test(newValue) || newValue === '') {
        setTarget(newValue);
      }
    };
  
    const handleDisplayValue = () => {
      setDisplayedTarget(Number(target));
    };
  
    return (
        <>
        <form >

            <div>
                <label htmlFor='target'>Set Target </label>
                <input type='number' name='target' id='target' value={target} onChange={handleNumberChange}/>
                
            </div>
            <button type="submit" onClick={handleDisplayValue}>Reset </button>
        </form>
        <p>Currunt Saving : </p>
        <div>
            {displayedTarget !== '' && (
        <div>
          <strong>Displayed Value:</strong> {displayedTarget}
        </div>
      )}
        </div>
        <progress max={100} value={5}/>
      </>
    );
    };
    export default SavingForm;