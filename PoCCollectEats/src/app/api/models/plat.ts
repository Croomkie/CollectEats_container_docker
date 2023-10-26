/* tslint:disable */
/* eslint-disable */
import { Choixoption } from './choixoption';
import { Restaurant } from './restaurant';
export interface Plat {
  choixoption?: Choixoption;
  choixoptionid?: null | number;
  description?: null | string;
  id?: number;
  nomplat?: null | string;
  prixbase?: null | number;
  restaurant?: Restaurant;
  restaurantid?: null | number;
}
