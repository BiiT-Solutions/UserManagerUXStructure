import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Observable} from "rxjs";
import {
  AuthService as AuthenticationService,
  AuthCalls,
  CreateUserRequest,
  LoginRequest,
  PasswordRequest,
  User,
  TokenRenewListener
} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements AuthCalls {

  private service: AuthenticationService;
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) {
    this.service = new AuthenticationService(this.rootService, this.httpClient);
  }
  public getAll(): Observable<User[]> {
    return this.service.getAll();
  }
  public add(user: User): Observable<User> {
    return this.service.add(user);
  }
  public update(request: CreateUserRequest): Observable<User> {
    return this.service.update(request);
  }
  public login(request: LoginRequest): Observable<HttpResponse<User>> {
    return this.service.login(request);
  }
  public changePassword(request: PasswordRequest): Observable<void> {
    return this.service.changePassword(request);
  }
  public getRoles(): Observable<string[]> {
    return this.service.getRoles();
  }
  public deleteByUserName(username: string): Observable<void> {
    return this.service.deleteByUserName(username);
  }

  public cancelAutoRenew(): void {
    this.service.cancelAutoRenew();
  }

  public autoRenewToken(token: string, expiration: number, tokenRenewListener: TokenRenewListener,
                        tolerance: number = undefined): void {
    this.service.autoRenewToken(token, expiration, tokenRenewListener, tolerance);
  }
  public renew(token ?: string): Observable<HttpResponse<User>> {
    return this.service.renew(token);
  }
}
