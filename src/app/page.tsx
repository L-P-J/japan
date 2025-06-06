"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';


// Import 輪播圖片
import autumnLeavesImg from '../picture/autumn-leaves-hunting-2440083_640.jpg';
import castleImg from '../picture/castle-5476737_640.jpg';
import fushimiInariImg from '../picture/fushimi-inari-4392017_640.jpg';
import japanImg1 from '../picture/japan-3664500_640.jpg';
import japanImg2 from '../picture/japan-5081058_640.jpg';
import pagodaImg from '../picture/pagoda-5138167_1280.jpg';
import templeImg from '../picture/temple-507413_640.jpg';

// 將圖片儲存在陣列中
const carouselImages = [
  autumnLeavesImg,
  castleImg,
  fushimiInariImg,
  japanImg1,
  japanImg2,
  pagodaImg,
  templeImg,
];


// 行程資料結構
type ItineraryItem = {
  title: string;
  subtitle: string;
  day: string;
};


const itinerary: ItineraryItem[] = [
  { title: "Arrival in Kyoto", subtitle: "6/19 -Day 1", day: "1" },
  { title: "Kyoto Exploration", subtitle: "6/20 -Day 2", day: "2" },
  { title: "Travel to Osaka", subtitle: "6/21 -Day 3", day: "3" },
  { title: "Osaka Sightseeing", subtitle: "6/22 -Day 4", day: "4" },
  { title: "USJ", subtitle: "6/23 -Day 5", day: "5" },
  { title: "Go home for Taiwan", subtitle: "6/24 -Day 6", day: "6" },
];

// Header元件
const Header: React.FC = () => {
  const router = useRouter(); // 引入 useRouter

  const handleNavigation = (menu: string) => {
    if (menu === "Home") {
      router.push("/");
    } 
    if (menu === "About Us") {
      router.push("/about");
    } 
  };

  return (
    <header className="flex items-center justify-between border-b border-[#e7eef3] px-10 py-3 bg-white">
      <div className="flex items-center gap-4 text-[#0e151b]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
          </svg>
        </div>
        <h2 className="text-lg font-bold tracking-[-0.015em]">Travels for Japan</h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          {["Home", "History", "TotalCosts", "booking", "About Us"].map((menu) => (
            <div
              key={menu}
              className="text-sm font-medium text-black cursor-pointer hover:underline" // 添加 cursor-pointer 和 hover 效果
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
    </header>
  );
};

const JapanTravelPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 3000); // 每 3 秒切換一次圖片

    return () => clearInterval(intervalId); // 清除定時器
  }, []);

  const handleItemClick = (day: string) => {
    router.push(`/${day}`);
  };


  return (
    <div className="relative min-h-screen flex flex-col bg-slate-50 overflow-x-hidden font-sans">
      <div className="flex flex-col grow h-full">
        <Header />
        <main className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="flex flex-col max-w-[960px] flex-1">
            {/* Banner */}
            <section className="rounded-xl min-h-80 overflow-hidden relative">
              <img
                src={carouselImages[currentImageIndex].src}
                alt={`Travel Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover absolute inset-0"
              />
              {/* 可以選擇在這裡添加指示點或其他輪播控制項 */}
            </section>
            {/* 行程表 */}
            <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#0e151b]">
              Your 6-Day Japan Itinerary
            </h2>
            <div className="flex flex-col gap-3">
              {itinerary.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-slate-100" // 添加 cursor-pointer 和 hover 效果
                  onClick={() => handleItemClick(item.day)} // 添加點擊事件
                >
                  <div className="flex flex-col justify-center">
                    <p className="text-base font-medium text-[#0e151b]">
                      {item.title}
                    </p>
                    <p className="text-sm text-[#4e7997]">{item.subtitle}</p>
                  </div>
                  <div className="shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={28}
                      height={28}
                      fill="currentColor"
                      viewBox="0 0 256 256"
                      className="text-[#0e151b]"
                    >
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-white py-4 text-center text-black text-sm font-medium border-t border-[#e7eef3]">
        © becky
      </footer>
    </div>
  );
};

export default JapanTravelPage;
