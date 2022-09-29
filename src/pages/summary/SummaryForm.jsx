import {useState} from 'react';

const SummaryForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <label htmlFor="checkbox" name="checkbox">
        terms and conditions
      </label>
      <input
        id="checkbox"
        type="checkbox"
        name="checkbox"
        aria-checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />

      <button disabled={!checked}>confirm order</button>
    </div>
  );
};

export default SummaryForm;
