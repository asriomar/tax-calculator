import React, { useState } from 'react';

const TaxCalculator = () => {
  const [payment, setPayment] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [taxAmount, setTaxAmount] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);

  const calculateTax = () => {
    if (isNaN(payment) || isNaN(taxRate) || payment < 0 || taxRate < 0) {
      alert('Please enter valid numbers for payment and tax rate.');
      return;
    }
    const paymentWithTax =
      parseFloat(payment) + (parseFloat(payment) * parseFloat(taxRate)) / 100;
    setTaxAmount((parseFloat(payment) * parseFloat(taxRate)) / 100);
    setTotalPayment(paymentWithTax);
  };

  const resetCalculator = () => {
    setPayment('');
    setTaxRate('');
    setTaxAmount(0);
    setTotalPayment(0);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h1 className="text-2xl mb-4">Tax Calculator</h1>
        <div className="mb-4">
          <label className="block text-gray-700">Payment before tax:</label>
          <input
            type="number"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter payment amount"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Tax rate (percentage):</label>
          <input
            type="number"
            step="0.01"
            value={taxRate}
            onChange={(e) => setTaxRate(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Enter tax rate"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={calculateTax}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Calculate Tax
          </button>
          <button
            onClick={resetCalculator}
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Reset
          </button>
        </div>
        <div className="mt-4">
          {taxAmount !== 0 && (
            <>
              <p>Tax amount: ${taxAmount.toFixed(2)}</p>
              <p>Total payment after tax: ${totalPayment.toFixed(2)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaxCalculator;
