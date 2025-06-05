import { DailyItineraryDetail, transportationType } from "./types";
import USJ from '../picture/IMG_6330.jpeg';

export const day5Itinerary: (DailyItineraryDetail | transportationType)[] = [
    {
        type: "Train",
        from: "大國町站",
        to: "環球影城站",
        duration: "50min", // Assuming flight duration
        notes: "07:00前抵達環球影城",
        category: "transportation",
      },        
      {
        time: "????",
        location: "吃飯飯",
        notes: "吃飯飯飯",
        category:"eating"
        },
    {
        location: "環球攻略",
        imageSrc: USJ.src,
        category: "default",
    },
];
