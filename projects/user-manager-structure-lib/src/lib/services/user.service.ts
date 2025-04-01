import {Injectable} from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "authorization-services-lib";
import {Observable} from "rxjs";
import {UpdatePasswordRequest} from "../models/update-password-request";
import {CheckCredentialsRequest} from "../models/check-credentials-request";
import {SignUpRequest} from "../models/signup-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly ROOT_PATH: string = '/users'

  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) {
  }

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

  getByIds(ids: number[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/ids`, ids);
  }

  getByUuid(uuid: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/uuids/${uuid}`);
  }

  getByUuids(uuids: string[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/uuids`, uuids);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${id}`);
  }

  updatePassword(username: string, updatePasswordRequest: UpdatePasswordRequest): Observable<User> {
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/${username}/passwords`, updatePasswordRequest);
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
    return this.httpClient.put<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/passwords`, updatePasswordRequest);
  }

  getUserByPhone(phone: string): Observable<User> {
    return this.httpClient.get<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/phones/${phone}`);
  }

  checkUserName(username: string): Observable<void> {
    return this.httpClient.get<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/${username}/available`);
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

  getByUserGroupId(userGroupId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/user-groups/${userGroupId}`);
  }

  getByUserGroupName(userGroupName: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/user-groups/names/${userGroupName}`);
  }

  getOrganizationUsers(organizationName: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/organizations/${organizationName}`);
  }

  getTeamUsers(teamId: number): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/teams/${teamId}`);
  }

  checkToken(token: string): Observable<void> {
    const params: HttpParams = new HttpParams().set('token', token);
    return this.httpClient.get<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/tokens`, {params: params});
  }

  resetPassword(email: string): Observable<void> {
    return this.httpClient.get<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/emails/${email}/reset-password`);
  }

  updatePasswordPublic(password: string, token: string): Observable<void> {
    const params: HttpParams = new HttpParams().set('token', token);
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/change-password`, {newPassword: password}, {params: params});
  }

  signup(signupRequest: SignUpRequest) {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/register`, signupRequest);
  }

  /**
   *  @deprecated Use signup instead
   */
  createPublic(firstname: string, lastname: string, username: string, email: string, password: string): Observable<User> {
    return this.httpClient.post<User>(`${this.rootService.serverUrl}${UserService.ROOT_PATH}/public/register`, {
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email,
      password: password
    });
  }
}
