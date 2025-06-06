"use client";


import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import corgiImg from "@/picture/japan-5081058_640.jpg";

// Header元件 (從 src/app/page.tsx 複製並修改以使用 useRouter)
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

// Footer元件 (從 src/app/page.tsx 複製)
const Footer: React.FC = () => (
  <footer className="bg-white py-4 text-center text-black text-sm font-medium border-t border-[#e7eef3]">
    © becky
  </footer>
);


const AboutUsPage: React.FC = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> {/* 修改主容器樣式 */}
      <Header /> {/* 添加 Header */}
      <main className="flex-1 flex flex-col items-center justify-center py-10"> {/* 修改 main 容器樣式 */}
          <h1 className="text-2xl font-bold mb-4 text-black">About Us</h1>
          <div className="mb-4">
            <Image
              src={corgiImg}
              alt="製作人頭貼"
              width={100}
              height={100}
              className="rounded-full mx-auto"
            />
          </div>
          <p className="text-lg mb-2 text-black">製作人: Becky</p>
          <p className="text-lg text-black">聯繫方式: Becky@why.com</p>
      </main>
      <Footer /> {/* 添加 Footer */}
    </div>
  );
};

export default AboutUsPage;
