import type { categorias } from "./gamesCategoryType";

export type gamesModel = {
  gameName: string;
  gameCategory: categorias;
  gameImg: string;
  gameLinkTo: string;
};
