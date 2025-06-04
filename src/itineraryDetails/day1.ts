import { DailyItineraryDetail, transportationType } from "./types";

export const day1Itinerary: (DailyItineraryDetail | transportationType)[] = [
    {
        time: "06:30",
        type: "Flight",
        from: "桃園國際機場-關西國際機場",
        duration: "3hr 20min", // Assuming flight duration
        notes: "華航櫃台報到",
      },
      {
        type: "Arrival",
        location: "關西國際機場",
        notes: "1. 抵達日本，通過入境檢查\n 2.領取行李, 購買ICOCA卡",
        category: "default",
      },
      {
        type: "Train",
        from: "關西機場-京都車站",
        duration: "1hr 30min",
        notes: "搭乘HARUKA特急列車",
      },
        {
            time: "16:00",
            location: "京都住宿地點",
            notes: "1. 相鐵FRESA INN 京都清水五條(計程車前往)",
            category: "default",
        },
        {
            type: "Transportation",
            from: "清水五條-伏見稻禾",
            duration: "25min",
          },
        {
            time: "17:00",
            location: "伏見稻禾田大社",
            notes: "1. 預計停留1-2hr",
            category: "sightseeing",
        },
        {
          type: "Transportation",
          from: "伏見稻禾-京都車站",
          duration: "25min",
        },
        {
        time: "????",
        location: "吃飯飯",
        notes: "吃飯飯飯",
        category:"eating"
        },
];
