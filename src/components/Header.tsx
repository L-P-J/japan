"use client";

import React, { useState } from "react";
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 控制漢堡菜單的狀態

  const handleNavigation = (menu: string) => {
    if (menu === "Home") {
      router.push("/");
    }
    if (menu === "About Us") {
      router.push("/about");
    }
    if (menu === "booking") {
      router.push("/booking");
    }
    setIsMenuOpen(false); // 導航後關閉菜單
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between border-b border-[#e7eef3] px-4 md:px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-[#0e151b]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-[-0.015em]">Travels for Japan</h2>
      </div>

      {/* 漢堡菜單按鈕 (只在小螢幕顯示) */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-[#0e151b] focus:outline-none">
          <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* 導航菜單 (大螢幕顯示，小螢幕隱藏) */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {["Home", "History", "TotalCosts", "booking", "About Us"].map((menu) => (
            <div
              key={menu}
              className="text-sm font-medium text-black cursor-pointer hover:underline"
              onClick={() => handleNavigation(menu)}
            >
              {menu}
            </div>
          ))}
        </div>
        <div
          className="rounded-full size-10 bg-center bg-no-repeat bg-cover ml-4"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC1c5JheNpqkkh_OtETu3pG9dFIPkWZwAcSxBQsD-xgJ0MlI3kjIj2ukc_9qA-w9TwmII3kjIj2ukc_9qA-w9TwmII4odBCF_3g8AXorPmIT5Cp4Zl9pZONU2drkTxu6Ej2Q1QP7eBU8OpvRIuDEv3GdCj6Ei_DYvhwfuAnn9iEjZiqcX6nCosVNwWPzCvj9UEJsKaG5Zch6kmH7ezI7hchchvo2X69GiFD_eGwM91lSZUV8skBCufXOilAQqbUwULz_rK4mCQEYcOc6DH431BvskMwuHFII9")',
          }}
        />
      </div>

      {/* 漢堡菜單內容 (只在小螢幕顯示，點擊按鈕後出現) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-[#e7eef3] shadow-md z-10">
          <div className="flex flex-col items-center py-4 gap-4">
            {["Home", "History", "TotalCosts", "booking", "About Us"].map((menu) => (
              <div
                key={menu}
                className="text-base font-medium text-black cursor-pointer hover:underline"
                onClick={() => handleNavigation(menu)}
              >
                {menu}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
