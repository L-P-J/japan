import { DailyItineraryDetail, transportationType } from "../../itineraryDetails/types";
import ItineraryDetailClient from "./ItineraryDetailClient"; // 導入新的客戶端組件

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


// 生成靜態參數
export async function generateStaticParams() {
  const days = Object.keys(dailyItineraries); // 根據 dailyItineraries 的 key 生成
  return days.map((day) => ({
    day: day,
  }));
}

const ItineraryDetailPage = () => {
  // 在伺服器組件中不使用 useParams 和 useRouter

  return (
    <ItineraryDetailClient /> // 使用客戶端組件渲染內容
  );
};

export default ItineraryDetailPage;
