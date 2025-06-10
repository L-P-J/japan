"use client";

import React, { useState, useEffect } from "react";
import Header from '../../components/Header';
import Footer from "@/components/Footer";
import CostDialog from "@/components/CostDialog";

const TotalCostPage: React.FC = () => {
  const [bookings, setBookings] = useState<{ date: string; time: string; location: string; type: string; cost?: number }[]>([]);
  const [costs, setCosts] = useState<{ itemName: string; totalAmount: number; numberOfPeople: number }[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isCostDialogOpen, setIsCostDialogOpen] = useState(false);


  // 從 Local Storage 載入預定資訊
  useEffect(() => {
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  // 從 Local Storage 載入花費資訊
  useEffect(() => {
    const savedCosts = localStorage.getItem('costs');
    if (savedCosts) {
      setCosts(JSON.parse(savedCosts));
    }
  }, []);

  // 將花費資訊儲存到 Local Storage
  useEffect(() => {
    localStorage.setItem('costs', JSON.stringify(costs));
  }, [costs]);


  // 計算總花費
  useEffect(() => {
    const bookingCosts = bookings.reduce((sum, booking) => {
      return sum + (booking.cost || 0);
    }, 0);
    const additionalCosts = costs.reduce((sum, costItem) => {
      return sum + (costItem.totalAmount / costItem.numberOfPeople);
    }, 0);
    setTotalCost(bookingCosts + additionalCosts);
  }, [bookings, costs]);

  const handleOpenCostDialog = () => {
    setIsCostDialogOpen(true);
  };

  const handleCloseCostDialog = () => {
    setIsCostDialogOpen(false);
  };

  const handleSaveCost = (costDetails: { itemName: string; totalAmount: number; numberOfPeople: number }) => {
    setCosts([...costs, costDetails]);
    console.log("Saved cost:", costDetails);
  };

  const handleDeleteCost = (indexToDelete: number) => {
    setCosts(costs.filter((_, index) => index !== indexToDelete));
  };


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl font-bold mb-4 text-black">總花費</h1>

        <div className="bg-white p-6 rounded-lg shadow-md text-black w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-3">花費明細</h2>
          <ul>
            {costs.map((costItem, index) => (
              <li key={`additional-cost-${index}`} className="mb-2 flex justify-between items-center">
                <div>
                  項目: {costItem.itemName}, 金額: ${costItem.totalAmount}, 人數: {costItem.numberOfPeople}
                </div>
                <button
                  onClick={() => handleDeleteCost(index)}
                  className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline"
                >
                  刪除
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-4 pt-4 border-t-2 border-gray-200 text-lg font-bold">
            總計: ${totalCost.toFixed(2)}
          </div>

          <button
            onClick={handleOpenCostDialog}
            className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            新增花費
          </button>
        </div>
      </main>
      <Footer />

      <CostDialog
        isOpen={isCostDialogOpen}
        onClose={handleCloseCostDialog}
        onSave={handleSaveCost}
      />
    </div>
  );
};

export default TotalCostPage;
