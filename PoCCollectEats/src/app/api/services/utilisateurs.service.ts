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

import { Utilisateur } from '../models/utilisateur';

@Injectable({ providedIn: 'root' })
export class UtilisateursService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `apiUtilisateursGetAllGet()` */
  static readonly ApiUtilisateursGetAllGetPath = '/api/Utilisateurs/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetAllGet$Plain$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Utilisateur>>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Utilisateur>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilisateursGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetAllGet$Plain(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Utilisateur>> {
    return this.apiUtilisateursGetAllGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Utilisateur>>): Array<Utilisateur> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetAllGet$Json$Response(
    params?: {
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Array<Utilisateur>>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Utilisateur>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilisateursGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetAllGet$Json(
    params?: {
    },
    context?: HttpContext
  ): Observable<Array<Utilisateur>> {
    return this.apiUtilisateursGetAllGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Utilisateur>>): Array<Utilisateur> => r.body)
    );
  }

  /** Path part for operation `apiUtilisateursGetByIdGet()` */
  static readonly ApiUtilisateursGetByIdGetPath = '/api/Utilisateurs/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetByIdGet$Plain$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Utilisateur>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'text', accept: 'text/plain', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilisateursGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetByIdGet$Plain(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Utilisateur> {
    return this.apiUtilisateursGetByIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Utilisateur>): Utilisateur => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetByIdGet$Json$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<Utilisateur>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursGetByIdGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(
      rb.build({ responseType: 'json', accept: 'text/json', context })
    ).pipe(
      filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Utilisateur>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiUtilisateursGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursGetByIdGet$Json(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<Utilisateur> {
    return this.apiUtilisateursGetByIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Utilisateur>): Utilisateur => r.body)
    );
  }

  /** Path part for operation `apiUtilisateursAddUtilisateurPost()` */
  static readonly ApiUtilisateursAddUtilisateurPostPath = '/api/Utilisateurs/AddUtilisateur';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursAddUtilisateurPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUtilisateursAddUtilisateurPost$Response(
    params?: {
      body?: Utilisateur
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursAddUtilisateurPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUtilisateursAddUtilisateurPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUtilisateursAddUtilisateurPost(
    params?: {
      body?: Utilisateur
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUtilisateursAddUtilisateurPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUtilisateursUpdatePut()` */
  static readonly ApiUtilisateursUpdatePutPath = '/api/Utilisateurs/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursUpdatePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUtilisateursUpdatePut$Response(
    params: {
      id: number;
      body?: Utilisateur
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursUpdatePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiUtilisateursUpdatePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUtilisateursUpdatePut(
    params: {
      id: number;
      body?: Utilisateur
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUtilisateursUpdatePut$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `apiUtilisateursDeleteDelete()` */
  static readonly ApiUtilisateursDeleteDeletePath = '/api/Utilisateurs/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUtilisateursDeleteDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursDeleteDelete$Response(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<StrictHttpResponse<void>> {
    const rb = new RequestBuilder(this.rootUrl, UtilisateursService.ApiUtilisateursDeleteDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiUtilisateursDeleteDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUtilisateursDeleteDelete(
    params: {
      id: number;
    },
    context?: HttpContext
  ): Observable<void> {
    return this.apiUtilisateursDeleteDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
