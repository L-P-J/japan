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
        location: "環球影城",
        notes: "1. 哈利波特牧羊人派 2.侏儸紀雞腿 3.小小兵包子 4.奶油啤酒",
        category:"eating"
        },
    {
        location: "環球攻略",
        imageSrc: USJ.src,
        category: "default",
    },
    {
        location: "吃吃~吃晚餐",
        notes: "1. 一蘭拉麵 2.大阪燒 3.松屋 4.超市",
        category:"eating"
    },
];
