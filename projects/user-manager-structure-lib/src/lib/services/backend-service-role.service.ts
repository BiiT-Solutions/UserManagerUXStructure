import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BackendServiceRole} from "../models/backend-service-role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceRoleService {

  private static readonly ROOT_PATH: string = '/backend-service-roles';
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<BackendServiceRole[]> {
    return this.httpClient.get<BackendServiceRole[]>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}`);
  }

  update(payload: BackendServiceRole): Observable<BackendServiceRole> {
    return this.httpClient.put<BackendServiceRole>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}`, payload);
  }
  create(payload: BackendServiceRole): Observable<BackendServiceRole> {
    return this.httpClient.post<BackendServiceRole>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}`, payload);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/count`);
  }
  delete(payload: BackendServiceRole): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/delete`, payload);
  }
  createBatch(payload: BackendServiceRole[]): Observable<BackendServiceRole[]> {
    return this.httpClient.post<BackendServiceRole[]>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<BackendServiceRole[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<BackendServiceRole[]>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<BackendServiceRole[]> {
    return this.httpClient.get<BackendServiceRole[]>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/user`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/user/count`);
  }
  getAllCreatedByUser(username: string): Observable<BackendServiceRole[]> {
    return this.httpClient.get<BackendServiceRole[]>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/user/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/user/${username}/count`);
  }
  getByUserNameAndGroupNameAndApplicationName(username: string, groupName: string, applicationName: string): Observable<BackendServiceRole> {
    return this.httpClient.get<BackendServiceRole>(
      `${this.rootService.serverUrl}${BackendServiceRoleService.ROOT_PATH}/users/${username}/groups/${groupName}/applications/${applicationName}`);
  }
}
