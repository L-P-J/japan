import { DailyItineraryDetail, transportationType } from "./types";

export const day4Itinerary: (DailyItineraryDetail | transportationType)[] = [
      {
        time: "08:00",
        location: "黑門市場",
        notes: "1. 走走看看\n 2. 預計停留1hr",
        category: "sightseeing",
      },
      {
        type: "train",
        from: "黑門市場",
        to: '大阪城公園',
        duration: "30min",
        category: "transportation",
      },
      {
        time: "10:00",
        location: "大阪城公園",
        notes: "1. 可以使用大阪周遊卷 2. 進入大阪城天守閣 ",
        category: "sightseeing",
      },
      {
        type: "train",
        from: "大阪城公園",
        to: "心齋橋",
        duration: "40min",
        category: "transportation",
      },
      {
        location: "心齋橋筋商店街",
        notes: "1. 一路走下去 2.買爆爆~",
        category: "sightseeing",
      },
      {
        location: "心齋橋",
        notes: "1.中午想吃大阪燒 2.MooKEN 3.可麗餅 4.章魚燒 5.可頌",
        category: "eating",
      },
      {
        location: "道頓堀",
        notes: "1. 一路走下去 2.買爆爆~",
        category: "sightseeing",
      },
      {
        location: "美國街",
        notes: "1. 一路走下去 2.買爆爆~",
        category: "sightseeing",
      },      
      {
        location: "難波八阪神社",
        notes: "1. 營業時間 17:00",
        category: "sightseeing",
      },      
      {
        location: "通天閣",
        notes: "1. 營業時間 20:00 2. 可以使用周遊卷上去玩溜滑梯跟觀景台",
        category: "sightseeing",
      },
      {
        location: "新世界",
        notes: "1. 通天閣雞蛋糕 2.炸串(越源)",
        category: "eating",
      },
      {
        location: "後續回飯店",
        notes: "1. 超市食物 ",
        category: "eating",
      },


];
