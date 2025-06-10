"use client";

import React from "react";
import Image from "next/image";
import corgiImg from "@/picture/japan-5081058_640.jpg";
import Header from '../../components/Header'; // 導入 Header 組件
import Footer from "@/components/Footer";



const AboutUsPage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> {/* 修改主容器樣式 */}
      <Header /> {/* 添加 Header */}
      <main className="flex-1 flex flex-col items-center md:justify-center py-10 px-4 md:px-0"> {/* 修改 main 容器樣式，小螢幕取消垂直居中，添加水平內邊距 */}
          <h1 className="text-xl md:text-2xl font-bold mb-4 text-black">About Us</h1> {/* 調整小螢幕字體大小 */}
          <div className="mb-4">
            <Image
              src={corgiImg}
              alt="製作人頭貼"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
          </div>
          <p className="text-base md:text-lg mb-2 text-black text-center">製作人: Becky</p> {/* 調整小螢幕字體大小，文字居中 */}
          <p className="text-base md:text-lg text-black text-center">聯繫方式: Becky@why.com</p> {/* 調整小螢幕字體大小，文字居中 */}
      </main>
      <Footer /> {/* 添加 Footer */}
    </div>
  );
};

export default AboutUsPage;
