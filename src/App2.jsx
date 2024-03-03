// Calculator.js
import React, { useState } from 'react';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [result6, setResult6] = useState(0);
  const [result8, setResult8] = useState(0);
  const [difference, setDifference] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const calculate = () => {
    const val = parseFloat(value);
    if (!isNaN(val)) {
      const tax6 = val * 0.06;
      setResult6(val + tax6);
      const tax8 = val * 0.08;
      setResult8(val + tax8);
      setDifference(val + tax8 - (val + tax6));
    }
  };

  const reset = () => {
    setValue('');
    setResult6(0);
    setResult8(0);
    setDifference(0);
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4 w-screen h-screen font-mono">
      <h2 className="text-lg font-bold">Tax differences between 6% and 8%</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <input
          type="number"
          placeholder="Enter the value (RM)"
          value={value}
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500 mx-4 my-2"
        />
        <div className="space-x-4 m-4 ">
          <button
            onClick={calculate}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Calculate
          </button>
          <button
            onClick={reset}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
          >
            Reset
          </button>
        </div>
        {result6 !== 0 && result8 !== 0 && (
          <div className="text-center">
            <p className="text-lg">
              Total with 6% tax:{' '}
              <span className="font-bold">RM {result6.toFixed(2)}</span>
            </p>
            <p className="text-lg">
              Total with 8% tax:{' '}
              <span className="font-bold">RM {result8.toFixed(2)}</span>
            </p>
            <p className="text-lg">
              Difference:{' '}
              <span className="font-bold">RM {difference.toFixed(2)}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Calculator;
