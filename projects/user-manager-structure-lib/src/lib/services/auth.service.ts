import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {CreateUserRequest} from "../models/create-user-request";
import {LoginRequest} from "../models/login-request";
import {PasswordRequest} from "../models/passwordRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly ROOT_PATH: string = '/auth';
  private static readonly FIRST_TIMER_TIME: number = 1000;
  private interval: number;
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }
  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/register`);
  }
  public add(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/register`, user);
  }
  public update(request: CreateUserRequest): Observable<User> {
    return this.httpClient.patch<User>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/register`, request);
  }
  public login(request: LoginRequest): Observable<HttpResponse<User>> {
    return this.httpClient.post<HttpResponse<User>>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/public/login`, request);
  }
  public changePassword(request: PasswordRequest): Observable<void> {
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/password`, request);
  }
  public getRoles(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/roles`);
  }
  public deleteByUserName(username: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/register/${username}`);
  }
  public autoRenewToken(token: string, callback: (token: string) => void): void {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.setIntervalRenew(token, AuthService.FIRST_TIMER_TIME, callback);
  }
  private setIntervalRenew(token: string, timeout: number, callback: (token: string) => void): void {
    this.interval = setInterval((): void => {
      this.renew(token).subscribe(
        (res: HttpResponse<User>) => {
          const authToken: string = res.headers.get('authorization');
          let expiration: number = Number(res.headers.get('expires'));
          if (!authToken || !expiration) {
            throw new Error('Server returned invalid response');
          }
          if (isNaN(expiration)) {
            throw new Error('Server returned invalid expiration time');
          }
          expiration = expiration - (new Date()).getTime();
          console.log(`Next token expiration: ${expiration}`);
          callback(authToken);
          this.setIntervalRenew(authToken, expiration, callback);
        }
      )
    }, timeout)
  }
  public renew(token ?: string): Observable<HttpResponse<User>> {
    return token ?
      this.httpClient.get<HttpResponse<User>>(
        `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`, {headers: {'Authorization': 'Bearer ' + token}})
      : this.httpClient.get<HttpResponse<User>>(
        `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`);
  }
}
