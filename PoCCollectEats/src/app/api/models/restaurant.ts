/* tslint:disable */
/* eslint-disable */
import { Adress } from './adress';
import { Horairesouverture } from './horairesouverture';
import { Plat } from './plat';
import { Utilisateur } from './utilisateur';
export interface Restaurant {
  adresse?: Adress;
  adresseid?: null | number;
  horairesouvertures?: null | Array<Horairesouverture>;
  id?: number;
  nom?: null | string;
  plats?: null | Array<Plat>;
  telephone?: null | string;
  utilisateur?: Utilisateur;
  utilisateurid?: null | number;
}
