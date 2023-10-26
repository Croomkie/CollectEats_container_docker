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

import { Plat } from '../models/plat';

@Injectable({ providedIn: 'root' })
export class PlatsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiPlatsGetAllGet()` */
  static readonly ApiPlatsGetAllGetPath = '/api/Plats/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Plat>>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Plat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Plat>> {
    return this.apiPlatsGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Plat>>): Array<Plat> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Plat>>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Plat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Plat>> {
    return this.apiPlatsGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Plat>>): Array<Plat> => r.body)
    );
  }

  /** Path part for operation `apiPlatsGetAllOfRestaurantGet()` */
  static readonly ApiPlatsGetAllOfRestaurantGetPath = '/api/Plats/GetAllOfRestaurant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetAllOfRestaurantGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllOfRestaurantGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Plat>>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetAllOfRestaurantGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Plat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetAllOfRestaurantGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllOfRestaurantGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Array<Plat>> {
    return this.apiPlatsGetAllOfRestaurantGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Plat>>): Array<Plat> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetAllOfRestaurantGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllOfRestaurantGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Plat>>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetAllOfRestaurantGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Plat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetAllOfRestaurantGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetAllOfRestaurantGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Array<Plat>> {
    return this.apiPlatsGetAllOfRestaurantGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Plat>>): Array<Plat> => r.body)
    );
  }

  /** Path part for operation `apiPlatsGetByIdGet()` */
  static readonly ApiPlatsGetByIdGetPath = '/api/Plats/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Plat>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Plat>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Plat> {
    return this.apiPlatsGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Plat>): Plat => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Plat>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Plat>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiPlatsGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Plat> {
    return this.apiPlatsGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Plat>): Plat => r.body)
    );
  }

  /** Path part for operation `apiPlatsAddPlatPost()` */
  static readonly ApiPlatsAddPlatPostPath = '/api/Plats/AddPlat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsAddPlatPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPlatsAddPlatPost$Response(
    params?: {
      body?: Plat
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsAddPlatPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiPlatsAddPlatPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPlatsAddPlatPost(
    params?: {
      body?: Plat
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiPlatsAddPlatPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPlatsUpdatePut()` */
  static readonly ApiPlatsUpdatePutPath = '/api/Plats/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPlatsUpdatePut$Response(
    params: {
      id: number;
      body?: Plat
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiPlatsUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiPlatsUpdatePut(
    params: {
      id: number;
      body?: Plat
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiPlatsUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiPlatsDeleteDelete()` */
  static readonly ApiPlatsDeleteDeletePath = '/api/Plats/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiPlatsDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, PlatsService.ApiPlatsDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiPlatsDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiPlatsDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiPlatsDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
