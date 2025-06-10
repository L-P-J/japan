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

// 導入 Header 組件
import Header from '../components/Header';
import Footer from "@/components/Footer";

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
          <div className="flex flex-col w-full max-w-[960px] flex-1"> {/* 添加 w-full */}
            {/* Banner */}
            <section className="rounded-xl min-h-60 md:min-h-80 overflow-hidden relative"> {/* 調整小螢幕最小高度 */}
              <img
                src={carouselImages[currentImageIndex].src}
                alt={`Travel Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover absolute inset-0"
              />
              {/* 可以選擇在這裡添加指示點或其他輪播控制項 */}
            </section>
            {/* 行程表 */}
            <h2 className="text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 text-[#0e151b]"> {/* 調整小螢幕字體大小 */}
              Your 6-Day Japan Itinerary
            </h2>
            <div className="flex flex-col gap-3">
              {itinerary.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center gap-4 bg-slate-50 px-4 min-h-[72px] py-2 justify-between cursor-pointer hover:bg-slate-100" // 添加 cursor-pointer 和 hover 效果
                  onClick={() => handleItemClick(item.day)} // 添加點擊事件
                >
                  <div className="flex flex-col justify-center flex-1 min-w-0"> {/* 添加 flex-1 min-w-0 */}
                    <p className="text-base font-medium text-[#0e151b] truncate md:whitespace-normal"> {/* 添加 truncate */}
                      {item.title}
                    </p>
                    <p className="text-sm text-[#4e7997] truncate md:whitespace-normal">{item.subtitle}</p> {/* 添加 truncate */}
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
      <Footer />
    </div>
  );
};

export default JapanTravelPage;
