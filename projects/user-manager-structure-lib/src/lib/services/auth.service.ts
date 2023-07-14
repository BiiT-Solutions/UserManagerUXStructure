import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {CreateUserRequest} from "../models/create-user-request";
import {LoginRequest} from "../models/login-request";
import {PasswordRequest} from "../models/password-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static readonly ROOT_PATH: string = '/auth';
  private static readonly TOLERANCE: number = 1000 * 60 * 5; // 5 minutes
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
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${AuthService.ROOT_PATH}/public/login`, request, {observe: 'response'});
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

  public cancelAutoRenew(): void {
    clearInterval(this.interval);
  }

  public autoRenewToken(token: string, expiration: number, callback: (token: string, expiration: number) => void,
                        tolerance: number = AuthService.TOLERANCE): void {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.interval = null;
    }
    const expirationDate: Date = new Date(expiration);
    const now: Date = new Date();
    const expirationTime: number = expirationDate.getTime() - AuthService.TOLERANCE - now.getTime();
    this.setIntervalRenew(token, expirationTime, callback, tolerance);
    console.log(`Next token renew on: ${expirationDate}`);
  }
  private setIntervalRenew(token: string, timeout: number, callback: (token: string, expiration: number) => void,
                           tolerance: number): void {
    this.interval = setInterval((): void => {
      this.renew(token).subscribe(
        {
          next: (res: HttpResponse<User>): void => {
            if (!res) {
              console.error('Server returned invalid response');
              return;
            }
              const authToken: string = res.headers.get('authorization');
              let expiration: number = Number(res.headers.get('expires'));
              if (!authToken || !expiration) {
                throw new Error('Server returned invalid response');
              }
              if (isNaN(expiration)) {
                throw new Error('Server returned invalid expiration time');
              }
              expiration = expiration - tolerance - (new Date()).getTime();
              console.log(`Next token renew on: ${new Date(expiration)}`);
              callback(authToken, expiration);
              this.setIntervalRenew(authToken, expiration, callback, tolerance);

          },
          error: (ignored: any): void => {
            callback(null, null);
            clearInterval(this.interval);
          }
        }
      )
    }, timeout)
  }
  public renew(token ?: string): Observable<HttpResponse<User>> {
    return token ?
      this.httpClient.get<User>(
        `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`, {headers: {'Authorization': 'Bearer ' + token}, observe: 'response'})
      : this.httpClient.get<User>(
        `${this.rootService.serverUrl}${AuthService.ROOT_PATH}/jwt/renew`, {observe: 'response'});
  }
}
