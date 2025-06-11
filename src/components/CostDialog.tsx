"use client";

import React, { useState, useEffect } from 'react';

interface CostDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (costDetails: { itemName: string; totalAmount: number; numberOfPeople: number }) => void;
  costDetails?: { itemName: string; totalAmount: number; numberOfPeople: number } | null;
}

const CostDialog: React.FC<CostDialogProps> = ({ isOpen, onClose, onSave, costDetails }) => {
  const [itemName, setItemName] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  useEffect(() => {
    if (costDetails) {
      setItemName(costDetails.itemName);
      setTotalAmount(costDetails.totalAmount);
      setNumberOfPeople(costDetails.numberOfPeople);
    } else {
      setItemName('');
      setTotalAmount(0);
      setNumberOfPeople(1);
    }
  }, [costDetails]);

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    if (itemName && totalAmount > 0 && numberOfPeople > 0) {
      onSave({ itemName, totalAmount, numberOfPeople });
      onClose(); // Close dialog after saving
    } else {
      // Optionally show an error message to the user
      alert('請填寫所有欄位並確保金額和人數大於零。');
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">新增花費</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="itemName">
            項目名稱
          </label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="totalAmount">
            總金額
          </label>
          <input
            type="number"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(parseFloat(e.target.value) || 0)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numberOfPeople">
            人數
          </label>
          <input
            type="number"
            id="numberOfPeople"
            value={numberOfPeople}
            onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 1)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
          >
            取消
          </button>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {costDetails ? '儲存' : '加入'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CostDialog;
