import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Observable} from "rxjs";
import {UpdatePasswordRequest} from "../models/update-password-request";
import {User} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private static readonly ROOT_PATH: string = '/users'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`);
  }

  public update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`, user);
  }

  public updatePassword(username: string, passwordRequest: UpdatePasswordRequest): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${username}/password`, passwordRequest);
  }

  public updateLoggedPassword(passwordRequest: UpdatePasswordRequest): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/password`, passwordRequest);
  }

  public create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`, user);
  }

  public createList(users: [User]): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/list`, users);
  }

  public getById(id: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${id}`);
  }

  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${id}`);
  }

  public getByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}`);
  }

  public getByUsernameAndApplicationName(username: string, applicationName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}/applications/${applicationName}`);
  }

  public getByPhone(phone: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/phones/${phone}`);
  }

  public getByUUID(uuid: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/uuids/${uuid}`);
  }

  public getByEnable(enable: boolean): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/enable/${enable}`);
  }

  public getByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/emails/${email}`);
  }

  public getByEmailAndApplicationName(email: string, applicationName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/emails/${email}/applications/${applicationName}`);
  }

  public countUsers(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/count`);
  }

  public deleteByUserName(username: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${username}`);
  }


}
