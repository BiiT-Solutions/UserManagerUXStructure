import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ApplicationBackendServiceRole} from "../models/application-backend-service-role";

@Injectable({
  providedIn: 'root'
})
export class ApplicationBackendServiceRoleService {
  private static readonly ROOT_PATH: string = '/application-backend-service-roles'

  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<ApplicationBackendServiceRole[]> {
    return this.httpClient.get<ApplicationBackendServiceRole[]>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}`);
  }
  update(payload: ApplicationBackendServiceRole): Observable<ApplicationBackendServiceRole> {
    return this.httpClient.put<ApplicationBackendServiceRole>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}`, payload);
  }
  create(payload: ApplicationBackendServiceRole): Observable<ApplicationBackendServiceRole> {
    return this.httpClient.post<ApplicationBackendServiceRole>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}`, payload);
  }
  deleteByApplicationNameAndApplicationRoleNameAndBackendServiceNameAndBackendServiceRoleName(
    applicationName: string, applicationRoleName: string, backendServiceName: string, backendServiceRoleName: string
  ): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/applications/${applicationName}/application-roles/${applicationRoleName}/backend-services/${backendServiceName}/backend-service-roles/${backendServiceRoleName}`
    )
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/count`);
  }
  delete(payload: ApplicationBackendServiceRole): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/delete`, payload);
  }
  createBatch(payload: ApplicationBackendServiceRole[]): Observable<ApplicationBackendServiceRole[]> {
    return this.httpClient.post<ApplicationBackendServiceRole[]>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<ApplicationBackendServiceRole[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<ApplicationBackendServiceRole[]>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/range`, {params});
  }

  getAllCreated(): Observable<ApplicationBackendServiceRole[]> {
    return this.httpClient.get<ApplicationBackendServiceRole[]>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/users`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/users/count`);
  }

  getAllCreatedByUser(username: string): Observable<ApplicationBackendServiceRole[]> {
    return this.httpClient.get<ApplicationBackendServiceRole[]>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/users/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationBackendServiceRoleService.ROOT_PATH}/users/${username}/count`);
  }
}
