

export interface Attraction {
  name: string;
  imageUrl: string;
  description: string;
}

export const attractions: Attraction[] = [
  {
    name: "伏見稻荷大社 (Fushimi Inari-taisha)",
    imageUrl: "/picture/tample2.jpg", // Example image path
    description: "伏見稻荷大社是位於日本京都市伏見區內的一座神社，以其數千座朱紅色鳥居構成的神祕隧道而聞名。這裡是供奉稻荷神（狐狸神）的總本社。",
  },
  {
    name: "清水寺 (Kiyomizu-dera)",
    imageUrl: "/picture/tample.jpg", // Example image path
    description: "清水寺是位於日本京都市東山區的佛教寺廟，是京都最古老的寺廟之一。其著名的木造清水舞台懸空於山坡之上，是俯瞰京都市景的絕佳地點。",
  },
];
