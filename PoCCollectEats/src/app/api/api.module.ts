/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AdressesService } from './services/adresses.service';
import { ChoixOptionsService } from './services/choix-options.service';
import { HorairesOuvertureService } from './services/horaires-ouverture.service';
import { OptionsPlatService } from './services/options-plat.service';
import { PlatsService } from './services/plats.service';
import { RestaurantsService } from './services/restaurants.service';
import { UtilisateursService } from './services/utilisateurs.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AdressesService,
    ChoixOptionsService,
    HorairesOuvertureService,
    OptionsPlatService,
    PlatsService,
    RestaurantsService,
    UtilisateursService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
