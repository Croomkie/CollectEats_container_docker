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

import { Choixoption } from '../models/choixoption';

@Injectable({ providedIn: 'root' })
export class ChoixOptionsService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiChoixOptionsGetAllGet()` */
  static readonly ApiChoixOptionsGetAllGetPath = '/api/ChoixOptions/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Choixoption>>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Choixoption>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChoixOptionsGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Choixoption>> {
    return this.apiChoixOptionsGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Choixoption>>): Array<Choixoption> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Choixoption>>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Choixoption>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChoixOptionsGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Choixoption>> {
    return this.apiChoixOptionsGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Choixoption>>): Array<Choixoption> => r.body)
    );
  }

  /** Path part for operation `apiChoixOptionsGetByIdGet()` */
  static readonly ApiChoixOptionsGetByIdGetPath = '/api/ChoixOptions/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Choixoption>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Choixoption>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChoixOptionsGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Choixoption> {
    return this.apiChoixOptionsGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Choixoption>): Choixoption => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Choixoption>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Choixoption>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiChoixOptionsGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Choixoption> {
    return this.apiChoixOptionsGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Choixoption>): Choixoption => r.body)
    );
  }

  /** Path part for operation `apiChoixOptionsAddChoixOptionPost()` */
  static readonly ApiChoixOptionsAddChoixOptionPostPath = '/api/ChoixOptions/AddChoixOption';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsAddChoixOptionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChoixOptionsAddChoixOptionPost$Response(
    params?: {
      body?: Choixoption
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsAddChoixOptionPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiChoixOptionsAddChoixOptionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChoixOptionsAddChoixOptionPost(
    params?: {
      body?: Choixoption
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiChoixOptionsAddChoixOptionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiChoixOptionsUpdatePut()` */
  static readonly ApiChoixOptionsUpdatePutPath = '/api/ChoixOptions/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChoixOptionsUpdatePut$Response(
    params: {
      id: number;
      body?: Choixoption
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiChoixOptionsUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiChoixOptionsUpdatePut(
    params: {
      id: number;
      body?: Choixoption
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiChoixOptionsUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiChoixOptionsDeleteDelete()` */
  static readonly ApiChoixOptionsDeleteDeletePath = '/api/ChoixOptions/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiChoixOptionsDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, ChoixOptionsService.ApiChoixOptionsDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiChoixOptionsDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiChoixOptionsDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiChoixOptionsDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
