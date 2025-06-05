import { DailyItineraryDetail, transportationType } from "./types";

export const day6Itinerary: (DailyItineraryDetail | transportationType)[] = [
  {
        time: "8:00",
        location: "木津市場",
        notes: "1. 飯店走路9分鐘\n 2. 逛木津市場",
        category: "sightseeing",
        },
  {
        time: "10:00",
        type: "train",
        from: "飯店",
        to: "臨空城",
        duration: "1 hr", 
        notes: "先寄放行李",
        category: "transportation",
      }, 
  {
        time: "11:30",
        location: "臨空城",
        notes: "1. 逛街",
        category: "sightseeing",
      },

  {
        time: "????",
        location: "吃飯飯",
        notes: "吃飯飯飯",
        category:"eating"
      },

 {
        time: "15:00",
        type: "train",
        from: "臨空城",
        to: "關西國際機場",
        duration: "6 min", // Assuming flight duration
        notes: "16:00前抵達機場",
        category: "transportation",
      }, 
{
        time: "16:00",
        type: "Flight",
        from: "關西國際機場",
        to: "桃園國際機場",
        duration: "2hr 55min", // Assuming flight duration
        notes: "華航櫃台報到, 19:05起飛",
        category: "transportation",
      },
      ]
