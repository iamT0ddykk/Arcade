import type { gamesModel } from "./models/gamesModel";

export const gamesInfos: gamesModel[] = [
  {
    gameName: "Tetris",
    gameCategory: "arcade",
    gameImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpk97dVv6GGvCrDKexzzEpRrdwKvt_U30T5b8eE28yr4-Hfv1lxAK9ex8&s=10",
    gameLinkTo: "/Tetris",
  },
  {
    gameName: "PacMan",
    gameCategory: "arcade",
    gameImg: "https://www2.minijuegosgratis.com/v3/games/thumbnails/2399_1.jpg",
    gameLinkTo: "/Pacman",
  },
  {
    gameName: "Snake Game",
    gameCategory: "arcade",
    gameImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQAqbzcqTdcrtR13guhrxVlTkohn7gTX5gbxz81y-sA&s=10",
    gameLinkTo: "/Snake",
  },
];
