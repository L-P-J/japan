import { DailyItineraryDetail, transportationType } from "./types";

export const day3Itinerary: (DailyItineraryDetail | transportationType)[] = [
      {
        time: "10:00",
        location: "京都車站",
        notes: "1. 前往大阪車站",
        category: "default",
      },
      {
        type: "Train",
        from: "京都車站",
        to:'天王寺站',
        duration: "1hr 10min",
        notes: "",
        category: "transportation",
      },
      {
        time: "12:00",
        location: "梅田車站",
        notes: "1. 吃HABIS+午餐",
        category: "default",
      },
            {
        location: "梅田車站",
        notes: "1. 吃HABIS+午餐",
        category: "eating",
      },
      {
        time: "14:00",
        location: "梅田藍天大廈",
        notes: "1. 參觀空中庭園展望台\n 2. 預計停留1-2hr",
        category: "sightseeing",
      },
      {
        time: "16:00",
        from: "梅田站",
        to: "難波站",
        type: "Train",
        duration: "30min",
        category: "transportation",
      },
      {
        time: "18:10",
        location: "道頓堀 力丸(難波道頓堀店)",
        notes: "1. 吃晚餐,已預約 18:10",
        category: "eating",
      },
            {
        time: "20:00",
        location: "道頓堀",
        notes:'1. 遊船遊覽道頓堀運河\n 2.需預約尚未預約',
        category: "sightseeing",
      },

      {
        location: "後續行程就隨便~~到處看看到處走走",
        category: "sightseeing",
      },
];
