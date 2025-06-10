"use client";

import React from "react";
import { useParams } from 'next/navigation';
import { DailyItineraryDetail, transportationType, isTransportation } from "../../itineraryDetails/types";
import Header from '../../components/Header'; // 導入 Header 組件

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

const ItineraryDetailClient: React.FC = () => {
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
          <div key={index} className={`mb-6 flex flex-col md:flex-row rounded-lg shadow text-black`}> {/* 在小螢幕上垂直排列 */}
            <div className={`w-full md:w-2 h-2 md:h-auto ${getCategoryColor(item.category)} rounded-t-lg md:rounded-l-lg md:rounded-t-none`}></div> {/* 調整顏色條樣式 */}
            <div className="flex-1 p-4">
              {isTransportation(item) ? (
                <div>
                  <h5 className="text-base md:text-lg font-semibold mb-2"> {/* 調整字體大小 */}
                    {item.type === 'Flight' && '🛫 '}
                    {item.type === 'Train' && '🚆 '}
                    {item.type === 'Bus' && '🚌 '}
                    {item.type === 'Walk' && '🚶 '}
                    {item.time && `${item.time} `}
                    {item.from} → {item.to} {" "}
                    ({item.duration})
                  </h5>
                  {item.notes && <p className="text-sm">NOTE： {item.notes}</p>} {/* 調整字體大小 */}
                </div>
              ) : (
                <div>
                  <h2 className="text-base md:text-lg font-semibold mb-2"> {item.time && `${item.time} `} {/* 調整字體大小 */}
                    {item.location}</h2>
                  {item.imageSrc && (
                    <img src={item.imageSrc} alt={item.location} className="mt-2 w-full h-auto object-cover" /> )} {/* 添加 w-full object-cover */}

                  {item.notes && <p className="text-sm"> NOTE: {item.notes}</p>} {/* 調整字體大小 */}
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

export default ItineraryDetailClient;
