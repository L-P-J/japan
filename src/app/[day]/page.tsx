"use client";

import React from "react";
import { useParams } from 'next/navigation';
import { DailyItineraryDetail, transportationType, isTransportation } from "../../itineraryDetails/types";

// Header元件 (從 src/app/page.tsx 複製)
const Header: React.FC = () => (
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
        {["Home", "History", "TotalCosts", "booking","About Us", ].map((menu) => (
          <a key={menu} className="text-sm font-medium text-black" href={menu === "Home" ? "/" : "#"}>
            {menu}
          </a>
        ))}
      </div>
      <div
        className="rounded-full size-10 bg-center bg-no-repeat bg-cover ml-4"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBC1c5JheNpqkkh_OtETu3pG9dFIPkWZwAcSxBQsD-xgJ0MlI3kjIj2ukc_9qA-w9TwmII3kjIj2ukc_9qA-w9TwmII4odBCF_3g8AXorPmIT5Cp4Zl9pZONU2drkTxu6Ej2Q1QP7eBU8OpvRIuDEv3GdCj6Ei_DYvhwfuAnn9iEjZiqcX6nCosVNwWPzCvj9UEJsKaG5Zch6kmH7ezI7hchvo2X69GiFD_eGwM91lSZUV8skBCufXOilAQqbUwULz_rK4mCQEYcOc6DH431BvskMwuHFII9")',
        }}
      />
    </div>
  </header>
);


// 導入所有行程細節資料
import { day1Itinerary } from "@/itineraryDetails/day1";
import { day2Itinerary } from "@/itineraryDetails/day2";
import { day3Itinerary } from "@/itineraryDetails/day3";
import { day4Itinerary } from "@/itineraryDetails/day4";
import { day5Itinerary } from "@/itineraryDetails/day5";
import { day6Itinerary } from "@/itineraryDetails/day6";

// 將行程詳細資料按天儲存
const dailyItineraries: { [key: string]: (DailyItineraryDetail | transportationType)[] } = {
  "1": day1Itinerary,
  "2": day2Itinerary,
  "3": day3Itinerary,
  "4": day4Itinerary,
  "5": day5Itinerary,
  "6": day6Itinerary,
};

const ItineraryDetailPage: React.FC = () => {
  const params = useParams();
  const day = params.day as string;

  const itineraryDetails = dailyItineraries[day];

  if (!itineraryDetails) {
    return <div>找不到該天的行程細節。</div>;
  }

  const getCategoryColor = (category: DailyItineraryDetail['category'] | transportationType['category']) => {
    switch (category) {
      case 'sightseeing':
        return 'bg-amber-500'; 
      case 'eating':
        return 'bg-green-500'; 
      case 'transportation':
        return 'bg-blue-500'; 
      default:
        return 'bg-gray-500'; 
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-xl font-bold mb-6 text-black">Day {day} Itinerary</h1>
        {itineraryDetails.map((item, index) => (
          <div key={index} className={`mb-6 flex rounded-lg shadow text-black`}>
            <div className={`w-2 ${getCategoryColor(item.category)} rounded-l-lg`}></div>
            <div className="flex-1 p-4">
              {isTransportation(item) ? (
                <div>
                  <h5 className="text-L font-semibold mb-2">
                    {item.type === 'Flight' && '🛫 '}
                    {item.type === 'Train' && '🚆 '}
                    {item.type === 'Bus' && '🚌 '}
                    {item.type === 'Walk' && '🚶 '}
                    {item.time && `${item.time} `}
                    {item.from} → {item.to} {" "}
                    ({item.duration})
                  </h5>
                  {item.notes && <p>NOTE： {item.notes}</p>}
                </div>
              ) : (
                <div>
                  <h2 className="text-L font-semibold mb-2"> {item.time && `${item.time} `}
                    {item.location}</h2>
                  {item.imageSrc && (
                    <img src={item.imageSrc} alt={item.location} className="mt-2 max-w-full h-auto" />
                  )}
                  {item.notes && <p> NOTE: {item.notes}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </main>
      <footer className="bg-white py-4 text-center text-black text-sm font-medium border-t border-[#e7eef3]">
        <p>© becky</p>
      </footer>
    </div>
  );
};

export default ItineraryDetailPage;
