import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError, concat, concatMap, delay, of, retryWhen, take, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export default class GerericService {
  constructor(private http: HttpClient, private router: Router){}

  /**
   *
   * @param url
   * @param endpoint
   * @param params
   * @param headers
   * @returns
   */
  public get<T>(url?: string, endpoint?: string, params?: string, headers?: HttpHeaders): Observable<any> {
    //const endpointUri = params ? `${endpoint}/` : `${endpoint}`;
    const paramsRequest = new HttpParams({fromString: params});
    return this.http.get<T>(`${url}/${endpoint}`, {
      headers, params: paramsRequest })
    .pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code == 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      )),
      catchError((err: HttpErrorResponse): any => {
        throw this.handleError(err);
      })
    )
  }

  /**
   *
   * @param url
   * @param endpoint
   * @param model
   * @param headers
   * @returns
   */
  public post<T>(
    url?: string, endpoint?: string, model?: any, headers?: HttpHeaders
  ):Observable<any>{
    return this.http.post<T>(`${url}/${endpoint}`, model, {headers})
    .pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code == 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      )),
      catchError((err: HttpErrorResponse): any => {
        throw this.handleError(err);
      })
    )
  }

  /**
   *
   * @param url
   * @param endpoint
   * @param model
   * @param headers
   * @returns
   */
  public put<T>(
    url?: string, endpoint?: string, model?: any, headers?: HttpHeaders
  ){
    return this.http.put<T>(`${url}/${endpoint}`, model, {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code == 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      )),
      catchError((err: HttpErrorResponse): any => {
        throw this.handleError(err);
      })
    )
  }


  public delete<T>(
    url?: string, endpoint?: string, headers?: HttpHeaders
  ){
    return this.http.delete(`${url}/${endpoint}`, {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code == 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      )),
      catchError((err: HttpErrorResponse): any => {
        throw this.handleError(err);
      })
    )
  }

  public patch<T>(
    url?: string, endpoint?: string, model?: any, headers?: HttpHeaders
  ){
    return this.http.patch<T>(`${url}/${endpoint}`, model, {headers}).pipe(
      retryWhen(errors => errors.pipe(
        concatMap((result: any) => {
          if(result.code == 504){
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4),
        o => concat(o, throwError('No fue posible conectarse al servidor'))
      )),
      catchError((err: HttpErrorResponse): any => {
        throw this.handleError(err);
      })
    )
  }

  handleError(error: HttpErrorResponse): any {
    if(
      error.error != null &&
      error.error.message === 'No Auth'
    ){
      this.router.navigate(['/fullscreen/login']);
      localStorage.clear();
    }
    let messageError = error.error != null ? `El servicio presenta el siguiente error: ${error.message}`:'';
    return throwError(messageError)
  }

}
