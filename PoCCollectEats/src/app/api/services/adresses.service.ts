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

import { Adress } from '../models/adress';

@Injectable({ providedIn: 'root' })
export class AdressesService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiAdressesGetAllGet()` */
  static readonly ApiAdressesGetAllGetPath = '/api/Adresses/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Adress>>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Adress>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdressesGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Adress>> {
    return this.apiAdressesGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Adress>>): Array<Adress> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Adress>>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Adress>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdressesGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Adress>> {
    return this.apiAdressesGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Adress>>): Array<Adress> => r.body)
    );
  }

  /** Path part for operation `apiAdressesGetByIdGet()` */
  static readonly ApiAdressesGetByIdGetPath = '/api/Adresses/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Adress>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Adress>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdressesGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Adress> {
    return this.apiAdressesGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adress>): Adress => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Adress>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Adress>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAdressesGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Adress> {
    return this.apiAdressesGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Adress>): Adress => r.body)
    );
  }

  /** Path part for operation `apiAdressesAddAdressePost()` */
  static readonly ApiAdressesAddAdressePostPath = '/api/Adresses/AddAdresse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesAddAdressePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdressesAddAdressePost$Response(
    params?: {
      body?: Adress
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesAddAdressePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiAdressesAddAdressePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdressesAddAdressePost(
    params?: {
      body?: Adress
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAdressesAddAdressePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAdressesUpdatePut()` */
  static readonly ApiAdressesUpdatePutPath = '/api/Adresses/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdressesUpdatePut$Response(
    params: {
      id: number;
      body?: Adress
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiAdressesUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAdressesUpdatePut(
    params: {
      id: number;
      body?: Adress
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAdressesUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiAdressesDeleteDelete()` */
  static readonly ApiAdressesDeleteDeletePath = '/api/Adresses/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAdressesDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, AdressesService.ApiAdressesDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiAdressesDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAdressesDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiAdressesDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
