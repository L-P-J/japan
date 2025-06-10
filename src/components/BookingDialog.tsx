"use client";

import React, { useState } from 'react';

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (bookingDetails: { date: string; location: string; type: string }) => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({ isOpen, onClose, onSave }) => {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('住宿'); // Default type

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    onSave({ date, location, type });
    setDate('');
    setLocation('');
    setType('住宿');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-black">新增預定</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            日期
          </label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            地點
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            類型
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="住宿">住宿</option>
            <option value="旅遊">旅遊</option>
            <option value="交通">交通</option>
          </select>
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
            加入
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDialog;
