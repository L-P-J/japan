import tample from "@/picture/tample.jpg"; 
import tample2 from "@/picture/tample2.jpg"; 
import tample3 from "@/picture/tample3.jpg"; 
import tample4 from "@/picture/tample4.jpg"; 
import nishiki from "@/picture/Shinsaibashi.jpg";
import osakaCastle from "@/picture/castle.jpg";
import Shinsaibashi from "@/picture/Shinsaibashi.jpg";
import dotonboriShinsaibashi from "@/picture/Dotonbori.jpg";
import newWorld from "@/picture/newworld.jpg";


export interface Attraction {
  name: string;
  imageUrl: string;
  description: string;
}

export const attractions: Attraction[] = [
  {
    name: "伏見稻荷大社 (Fushimi Inari-taisha)",
    imageUrl: tample.src, // Example image path
    description: "伏見稻荷大社是位於日本京都市伏見區內的一座神社，以其數千座朱紅色鳥居構成的神祕隧道而聞名。這裡是供奉稻荷神（狐狸神）的總本社。",
  },
  {
    name: "清水寺 (Kiyomizu-dera)",
    imageUrl: tample2.src, // Example image path
    description: "清水寺是位於日本京都市東山區的佛教寺廟，是京都最古老的寺廟之一。其著名的木造清水舞台懸空於山坡之上，是俯瞰京都市景的絕佳地點。",
  },
  {
    name: "錦天滿宮 (Nishiki Tenmangu Shrine)",
    imageUrl: tample3.src, // Example image path
    description: "錦天滿宮是位於京都市中心的神社，以學問之神菅原道真為祭神。",
  },
  {
    name: "錦市場 (Nishiki Market)",
    imageUrl: nishiki.src, // Example image path
    description: "錦市場是京都著名的傳統市場，擁有豐富的當地食材、小吃和特色商品，是體驗京都飲食文化的好去處。",
  },
  {
    name: "大阪城 (Osaka Castle)",
    imageUrl: osakaCastle.src, // Example image path
    description: "大阪城是日本大阪市中央區的一座歷史建築，是日本最重要的城郭之一。它在歷史上曾是豐臣秀吉的居城，現在是大阪的象徵。",
  },
  {
    name: "新世界 (Shinsekai)",
    imageUrl: newWorld.src, // Example image path
    description: "新世界是位於日本大阪市浪速區的一個老城區，以通天閣和串炸聞名。這裡充滿懷舊氛圍，是體驗大阪庶民文化的好地方。",
  },
  {
    name: "道頓堀 (Dotonbori)",
    imageUrl: dotonboriShinsaibashi.src, // Example image path
    description: "道頓堀是大阪著名的觀光區，以其豐富的夜生活、大型霓虹招牌和美食聞名，特別是螃蟹道樂和固力果跑者招牌。",
  },
  {
    name: "心齋橋 (Shinsaibashi)",
    imageUrl: Shinsaibashi.src, // Example image path
    description: "心齋橋是大阪的主要購物區，擁有各種百貨公司、品牌專賣店和時尚精品店，是購物愛好者的天堂。",
  },
  {
    name: "難波八阪神社 (Namba Yasaka Shrine)",
    imageUrl: tample4.src, // Example image path
    description: "難波八阪神社是位於大阪市浪速區的神社，以其巨大的獅子頭形狀繪馬殿聞名。這個獨特的建築是大阪的一個顯著地標。",
  },
];
