import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from '@biit-solutions/authorization-services';
import {Observable} from "rxjs";
import {UserGroup} from "../models/user-group";

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  private static readonly ROOT_PATH: string = '/user-groups'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }
  getAll(): Observable<UserGroup[]> {
    return this.httpClient.get<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}`);
  }
  update(userGroup: UserGroup): Observable<UserGroup> {
    return this.httpClient.put<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}`, userGroup);
  }
  create(userGroup: UserGroup): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}`, userGroup);
  }
  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/${id}`);
  }
  getById(id: number): Observable<UserGroup> {
    return this.httpClient.get<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/${id}`);
  }
  getByUsername(username: string): Observable<UserGroup[]> {
    return this.httpClient.get<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/username/${username}`);
  }
  addUsers(id: number, users: User[]): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/${id}/users`, users);
  }
  removeUsers(id: number, users: User[]): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/${id}/users/remove`, users);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/count`);
  }
  createBatch(userGroups: UserGroup[]): Observable<UserGroup[]> {
    return this.httpClient.post<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/list`, userGroups);
  }
  getByName(name: string): Observable<UserGroup> {
    return this.httpClient.get<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${name}`);
  }
  deleteByName(name: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${name}`);
  }
  addApplicationRoleByName(userGroupName: string, applicationName: string, roleName: string): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${userGroupName}/applications/${applicationName}/application-roles/${roleName}`, null);
  }
  removeApplicationRoleByName(userGroupName: string, applicationName: string, roleName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${userGroupName}/applications/${applicationName}/application-roles/${roleName}`);
  }
  addApplicationRoleById(userGroupId: number, applicationName: string, roleName: string): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/id/${userGroupId}/applications/${applicationName}/application-roles/${roleName}`, null);
  }
  removeApplicationRoleById(userGroupId: number, applicationName: string, roleName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/id/${userGroupId}/applications/${applicationName}/application-roles/${roleName}`);
  }
  assignBackendServiceNameAndBackendServiceRoleToUserGroup(userGroupName: string, applicationName: string, roleName: string, backendServiceName: string, backendServiceRoleName: string): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${userGroupName}/applications/${applicationName}/application-roles/${roleName}/backend-services/${backendServiceName}/backend-service-roles/${backendServiceRoleName}`, null);
  }
  assignApplicationNameAndRoleNameToUserGroupById(id: string, applicationName: string, roleName: string): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${id}/applications/${applicationName}/application-roles/${roleName}`, null);
  }
  removeApplicationNameAndRoleNameToUserGroupById(id: string, applicationName: string, roleName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${id}/applications/${applicationName}/application-roles/${roleName}`);
  }
  assignBackendServiceNameAndBackendServiceRoleToUserGroupById(id: string, applicationName: string, roleName: string, backendServiceName: string, backendServiceRoleName: string): Observable<UserGroup> {
    return this.httpClient.post<UserGroup>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/name/${id}/applications/${applicationName}/application-roles/${roleName}/backend-services/${backendServiceName}/backend-service-roles/${backendServiceRoleName}`, null);
  }
  checkUserGroupName(userGroupName: string): Observable<void> {
    return this.httpClient.get<void>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/public/${userGroupName}/check`);
  }
  range(from: Date, to: Date): Observable<UserGroup[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<UserGroup[]> {
    return this.httpClient.get<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/createdBy`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/createdBy/count`);
  }
  getAllCreatedByUser(username: string): Observable<UserGroup[]> {
    return this.httpClient.get<UserGroup[]>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/createdBy/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserGroupService.ROOT_PATH}/createdBy/${username}/count`);
  }
}
