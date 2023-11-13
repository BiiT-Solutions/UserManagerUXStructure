import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "authorization-services-lib";
import {Observable} from "rxjs";
import {UpdatePasswordRequest} from "../models/update-password-request";
import {CheckCredentialsRequest} from "../models/check-credentials-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly ROOT_PATH: string = '/users'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }
  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`);
  }
  update(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`, user);
  }
  create(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}`, user);
  }
  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${id}`);
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${id}`);
  }
  updatePassword(username: string, updatePasswordRequest: UpdatePasswordRequest): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${username}/password`, updatePasswordRequest);
  }
  getAllByAccountExpired(expired: boolean): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/accounts-expired/${expired}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/count`);
  }
  checkCredentials(checkCredentialsRequest: CheckCredentialsRequest): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/credentials`, checkCredentialsRequest);
  }
  delete(user: User): Observable<void> {
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/delete`, user);
  }
  getByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/emails/${email}`);
  }
  getByEmailAndApplicationName(email: string, applicationName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/emails/${email}/applications/${applicationName}`);
  }
  getAllByEnabled(enabled: boolean): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/enabled/${enabled}`);
  }
  createBatch(users: User[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/list`, users);
  }
  updateCurrentPassword(updatePasswordRequest: UpdatePasswordRequest): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/password`, updatePasswordRequest);
  }
  getUserByPhone(phone: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/phones/${phone}`);
  }
  checkUserName(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/${username}/check`);
  }
  range(from: Date, to: Date): Observable<User[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/users`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/users/count`);
  }
  getAllCreatedByUser(username: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/users/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/users/${username}/count`);
  }
  getUserByUsername(username: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}`);
  }
  deleteByUserName(username: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}`);
  }
  deleteByUserNameAndApplicationNameAndRoleName(username: string, applicationName: string, roleName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}/applications/${applicationName}/application-roles/${roleName}`);
  }
  assignApplicationNameAndRoleNameToUser(username: string, applicationName: string, roleName: string): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}/applications/${applicationName}/application-roles/${roleName}`, null);
  }
  getByUsernameAndApplicationName(username: string, applicationName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}/applications/${applicationName}`);
  }
  getByUsernameAndServiceName(username: string, serviceName: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/usernames/${username}/services/${serviceName}`);
  }
  getByUUID(uuid: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/uuids/${uuid}`);
  }
}
