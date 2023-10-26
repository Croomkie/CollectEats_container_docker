/* tslint:disable */
/* eslint-disable */
import { Optionsplat } from './optionsplat';
import { Plat } from './plat';
export interface Choixoption {
  id?: number;
  nomchoix?: null | string;
  optionsplats?: null | Array<Optionsplat>;
  plats?: null | Array<Plat>;
  surcout?: null | number;
}
