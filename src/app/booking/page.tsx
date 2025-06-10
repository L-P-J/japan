"use client";

import React, { useState, useEffect } from "react";
import Header from '../../components/Header'; // 導入 Header 組件
import Footer from "@/components/Footer";
import BookingDialog from "@/components/BookingDialog";


const BookingPage: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bookings, setBookings] = useState<{ date: string; location: string; type: string }[]>([]);

  // 從 Local Storage 載入預定資訊
  useEffect(() => {
    const savedBookings = localStorage.getItem('bookings');
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []); // 空依賴項表示只在組件載入時執行一次

  // 將預定資訊儲存到 Local Storage
  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]); // 當 bookings 狀態改變時執行

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSaveBooking = (bookingDetails: { date: string; location: string; type: string }) => {
    setBookings([...bookings, bookingDetails]);
    console.log("Saved booking:", bookingDetails);
  };

  const handleDeleteBooking = (indexToDelete: number) => {
    setBookings(bookings.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-10">
        <h1 className="text-2xl font-bold mb-4 text-black">Booking Page</h1>

        {/* 交通區塊 */}
        <section className="mt-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-black">交通</h2>

          {/* 顯示交通預定列表 */}
          {bookings.filter(b => b.type === '交通').length > 0 && (
            <ul className="mt-4">
              {bookings.filter(b => b.type === '交通').map((booking, index) => (
                <li key={`交通-${index}`} className="bg-white p-4 rounded-lg shadow-md mb-2 text-black flex justify-between items-center">
                  <div>
                    <strong>日期:</strong> {booking.date}, <strong>地點:</strong> {booking.location}
                  </div>
                  <button
                    onClick={() => handleDeleteBooking(bookings.indexOf(booking))}
                    className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline"
                  >
                    刪除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 住宿區塊 */}
        <section className="mt-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-black">住宿</h2>
          {/* 顯示住宿預定列表 */}
          {bookings.filter(b => b.type === '住宿').length > 0 && (
            <ul className="mt-4">
              {bookings.filter(b => b.type === '住宿').map((booking, index) => (
                <li key={`住宿-${index}`} className="bg-white p-4 rounded-lg shadow-md mb-2 text-black flex justify-between items-center">
                  <div>
                    <strong>日期:</strong> {booking.date}, <strong>地點:</strong> {booking.location}
                  </div>
                  <button
                    onClick={() => handleDeleteBooking(bookings.indexOf(booking))}
                    className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline"
                  >
                    刪除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 旅遊區塊 */}
        <section className="mt-8 w-full max-w-2xl">
          <h2 className="text-xl font-semibold mb-3 text-black">旅遊</h2>

          {/* 顯示旅遊預定列表 */}
          {bookings.filter(b => b.type === '旅遊').length > 0 && (
            <ul className="mt-4">
              {bookings.filter(b => b.type === '旅遊').map((booking, index) => (
                <li key={`旅遊-${index}`} className="bg-white p-4 rounded-lg shadow-md mb-2 text-black flex justify-between items-center">
                  <div>
                    <strong>日期:</strong> {booking.date}, <strong>地點:</strong> {booking.location}
                  </div>
                  <button
                    onClick={() => handleDeleteBooking(bookings.indexOf(booking))}
                    className="bg-red-300 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs focus:outline-none focus:shadow-outline"
                  >
                    刪除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>


        {/* 添加新增預定按鈕 */}
        <button
          onClick={handleOpenDialog}
          className="mt-8 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          新增預定
        </button>

      </main>
      <Footer />

      {/* 預定對話框 */}
      <BookingDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onSave={handleSaveBooking}
      />
    </div>
  );
};

export default BookingPage;
