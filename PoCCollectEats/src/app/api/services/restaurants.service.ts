/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';

import { Restaurant } from '../models/restaurant';

@Injectable({ providedIn: 'root' })
export class RestaurantsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiRestaurantsGetAllGet()` */
  static readonly ApiRestaurantsGetAllGetPath = '/api/Restaurants/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Restaurant>>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Restaurant>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Restaurant>> {
    return this.apiRestaurantsGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Restaurant>>): Array<Restaurant> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Restaurant>>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Restaurant>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Restaurant>> {
    return this.apiRestaurantsGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Restaurant>>): Array<Restaurant> => r.body)
    );
  }

  /** Path part for operation `apiRestaurantsGetByIdGet()` */
  static readonly ApiRestaurantsGetByIdGetPath = '/api/Restaurants/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Restaurant>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Restaurant>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Restaurant> {
    return this.apiRestaurantsGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Restaurant>): Restaurant => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Restaurant>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Restaurant>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Restaurant> {
    return this.apiRestaurantsGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Restaurant>): Restaurant => r.body)
    );
  }

  /** Path part for operation `apiRestaurantsAddRestaurantsPost()` */
  static readonly ApiRestaurantsAddRestaurantsPostPath = '/api/Restaurants/AddRestaurants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsAddRestaurantsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRestaurantsAddRestaurantsPost$Response(
    params?: {
      body?: Restaurant
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsAddRestaurantsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsAddRestaurantsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRestaurantsAddRestaurantsPost(
    params?: {
      body?: Restaurant
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiRestaurantsAddRestaurantsPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRestaurantsUpdatePut()` */
  static readonly ApiRestaurantsUpdatePutPath = '/api/Restaurants/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRestaurantsUpdatePut$Response(
    params: {
      id: number;
      body?: Restaurant
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsUpdatePutPath, 'put');
    if (params) {
      rb.query('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiRestaurantsUpdatePut(
    params: {
      id: number;
      body?: Restaurant
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiRestaurantsUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiRestaurantsDeleteDelete()` */
  static readonly ApiRestaurantsDeleteDeletePath = '/api/Restaurants/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiRestaurantsDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, RestaurantsService.ApiRestaurantsDeleteDeletePath, 'delete');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: '*/*', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiRestaurantsDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiRestaurantsDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiRestaurantsDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
