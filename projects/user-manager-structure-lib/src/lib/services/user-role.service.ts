import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient} from "@angular/common/http";
import {UserRole} from "../models/user-role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  private static readonly ROOT_PATH: string = '/roles/users';

  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  public getAll(): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}`);
  }
  public update(userRole: UserRole): Observable<UserRole> {
    return this.httpClient.put<UserRole>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}`, userRole);
  }
  public create(userRole: UserRole): Observable<UserRole> {
    return this.httpClient.post<UserRole>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}`, userRole);
  }
  public createBunch(userRoles: UserRole[]): Observable<UserRole[]> {
    return this.httpClient.post<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/list`, userRoles);
  }
  public getById(id: string): Observable<UserRole> {
    return this.httpClient.get<UserRole>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/${id}`);
  }
  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/${id}`);
  }
  public getRolesByUserName(username: string): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/usernames/${username}`);
  }
  public getRolesByUserNameAndGroupNameAndApplicationName(username: string, groupName: string, applicationName: string): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/usernames/${username}
    /groups/${groupName}/applications/${applicationName}`);
  }
  public getRolesByGroupName(groupName: string): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/groups/${groupName}`);
  }
  public getRolesByGorupNameAndRoleName(groupName: string, roleName: string): Observable<UserRole[]> {
    return this.httpClient.get<UserRole[]>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/groups/${groupName}/roles/${roleName}`);
  }
  public countRoles(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${UserRoleService.ROOT_PATH}/count`);
  }
}
