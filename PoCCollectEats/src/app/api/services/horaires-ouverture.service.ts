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

import { Horairesouverture } from '../models/horairesouverture';

@Injectable({ providedIn: 'root' })
export class HorairesOuvertureService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiHorairesOuvertureGetAllGet()` */
  static readonly ApiHorairesOuvertureGetAllGetPath = '/api/HorairesOuverture/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Horairesouverture>>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Horairesouverture>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHorairesOuvertureGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Horairesouverture>> {
    return this.apiHorairesOuvertureGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Horairesouverture>>): Array<Horairesouverture> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Horairesouverture>>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Horairesouverture>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHorairesOuvertureGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Horairesouverture>> {
    return this.apiHorairesOuvertureGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Horairesouverture>>): Array<Horairesouverture> => r.body)
    );
  }

  /** Path part for operation `apiHorairesOuvertureGetByIdGet()` */
  static readonly ApiHorairesOuvertureGetByIdGetPath = '/api/HorairesOuverture/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Horairesouverture>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Horairesouverture>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHorairesOuvertureGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Horairesouverture> {
    return this.apiHorairesOuvertureGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Horairesouverture>): Horairesouverture => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Horairesouverture>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Horairesouverture>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiHorairesOuvertureGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Horairesouverture> {
    return this.apiHorairesOuvertureGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Horairesouverture>): Horairesouverture => r.body)
    );
  }

  /** Path part for operation `apiHorairesOuvertureAddHorairePost()` */
  static readonly ApiHorairesOuvertureAddHorairePostPath = '/api/HorairesOuverture/AddHoraire';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureAddHorairePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHorairesOuvertureAddHorairePost$Response(
    params?: {
      body?: Horairesouverture
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureAddHorairePostPath, 'post');
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
   * To access the full response (for headers, for example), `apiHorairesOuvertureAddHorairePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHorairesOuvertureAddHorairePost(
    params?: {
      body?: Horairesouverture
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiHorairesOuvertureAddHorairePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiHorairesOuvertureUpdatePut()` */
  static readonly ApiHorairesOuvertureUpdatePutPath = '/api/HorairesOuverture/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHorairesOuvertureUpdatePut$Response(
    params: {
      id: number;
      body?: Horairesouverture
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiHorairesOuvertureUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiHorairesOuvertureUpdatePut(
    params: {
      id: number;
      body?: Horairesouverture
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiHorairesOuvertureUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiHorairesOuvertureDeleteDelete()` */
  static readonly ApiHorairesOuvertureDeleteDeletePath = '/api/HorairesOuverture/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiHorairesOuvertureDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, HorairesOuvertureService.ApiHorairesOuvertureDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiHorairesOuvertureDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiHorairesOuvertureDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiHorairesOuvertureDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
