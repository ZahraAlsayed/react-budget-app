import React, { useState, useMemo } from 'react';

type SavingForm = {
  transSavingAmount: number;
   getSaving: (savingAmount: number) => void
}

const SavingForm = (props: SavingForm) => {
  const [target, setTarget] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTarget= Number(event.target.value);
    setTarget(newTarget);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setTarget(0);
    props.getSaving(props.transSavingAmount);
  };

  // Calculate the progress percentage
  const progress = useMemo(() => (props.transSavingAmount / target) * 100, [props.transSavingAmount, target]);
  const calculatePercentage = () => {
    if (target === 0) {
      return 0; // Avoid division by zero
    }
    return progress;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='target'>Set Target</label>
          <input type='number' name='target' id='target' value={target} onChange={handleChange} />
        </div>
        <button type="submit">Reset</button>
      </form>
      <p>Current Saving: {props.transSavingAmount}</p>
      <div>
        <div>
          <strong>Target: {target}</strong>
        </div>
      </div>
      <p>Percentage of Target: {calculatePercentage()}%</p>

      <progress max={100} value={progress} />
    </div>
  );
}

export default SavingForm;
