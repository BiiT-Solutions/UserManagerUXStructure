import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApplicationRole} from "../models/application-role";

@Injectable({
  providedIn: 'root'
})
export class ApplicationRoleService {

  private static readonly ROOT_PATH: string = '/application-roles'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}`);
  }

  getByUsername(username: string): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/users/${username}`);
  }
  update(payload: ApplicationRole): Observable<ApplicationRole> {
    return this.httpClient.put<ApplicationRole>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}`, payload);
  }

  create(payload: ApplicationRole): Observable<ApplicationRole> {
    return this.httpClient.post<ApplicationRole>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}`, payload);
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/count`);
  }
  delete(payload: ApplicationRole): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/delete`, payload);
  }

  deleteByApplicationAndRole(applicationName: string, roleName: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/applications/${applicationName}/roles/${roleName}`);
  }

  getByApplicationName(applicationName: string): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/applications/${applicationName}`);
  }
  createBatch(payload: ApplicationRole[]): Observable<ApplicationRole[]> {
    return this.httpClient.post<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<ApplicationRole[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/range`, {params});
  }

  getByRoleName(roleName: string): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/roles/${roleName}`);
  }

  getAllCreated(): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/users`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/users/count`);
  }
  getAllCreatedByUser(username: string): Observable<ApplicationRole[]> {
    return this.httpClient.get<ApplicationRole[]>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/users/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationRoleService.ROOT_PATH}/users/${username}/count`);
  }
}
