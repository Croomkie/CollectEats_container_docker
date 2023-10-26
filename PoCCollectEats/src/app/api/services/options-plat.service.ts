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

import { Optionsplat } from '../models/optionsplat';

@Injectable({ providedIn: 'root' })
export class OptionsPlatService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiOptionsPlatGetAllGet()` */
  static readonly ApiOptionsPlatGetAllGetPath = '/api/OptionsPlat/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Optionsplat>>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Optionsplat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOptionsPlatGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Optionsplat>> {
    return this.apiOptionsPlatGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Optionsplat>>): Array<Optionsplat> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Optionsplat>>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Optionsplat>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOptionsPlatGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Optionsplat>> {
    return this.apiOptionsPlatGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Optionsplat>>): Array<Optionsplat> => r.body)
    );
  }

  /** Path part for operation `apiOptionsPlatGetByIdGet()` */
  static readonly ApiOptionsPlatGetByIdGetPath = '/api/OptionsPlat/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Optionsplat>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Optionsplat>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOptionsPlatGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Optionsplat> {
    return this.apiOptionsPlatGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Optionsplat>): Optionsplat => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Optionsplat>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Optionsplat>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiOptionsPlatGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Optionsplat> {
    return this.apiOptionsPlatGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Optionsplat>): Optionsplat => r.body)
    );
  }

  /** Path part for operation `apiOptionsPlatAddOptionPost()` */
  static readonly ApiOptionsPlatAddOptionPostPath = '/api/OptionsPlat/AddOption';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatAddOptionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOptionsPlatAddOptionPost$Response(
    params?: {
      body?: Optionsplat
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatAddOptionPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiOptionsPlatAddOptionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOptionsPlatAddOptionPost(
    params?: {
      body?: Optionsplat
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOptionsPlatAddOptionPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOptionsPlatUpdatePut()` */
  static readonly ApiOptionsPlatUpdatePutPath = '/api/OptionsPlat/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOptionsPlatUpdatePut$Response(
    params: {
      id: number;
      body?: Optionsplat
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiOptionsPlatUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiOptionsPlatUpdatePut(
    params: {
      id: number;
      body?: Optionsplat
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOptionsPlatUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiOptionsPlatDeleteDelete()` */
  static readonly ApiOptionsPlatDeleteDeletePath = '/api/OptionsPlat/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiOptionsPlatDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, OptionsPlatService.ApiOptionsPlatDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiOptionsPlatDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiOptionsPlatDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiOptionsPlatDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
