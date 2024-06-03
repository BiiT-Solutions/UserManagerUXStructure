import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Organization} from "../models/organization";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  private static readonly ROOT_PATH: string = '/organizations'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}`);
  }
  create(payload: Organization): Observable<Organization> {
    return this.httpClient.post<Organization>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}`, payload);
  }
  update(payload: Organization): Observable<Organization> {
    return this.httpClient.put<Organization>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}`, payload);
  }
  delete(payload: Organization): Observable<Organization> {
    return this.httpClient.post<Organization>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}`, payload);
  }
  getById(id: string): Observable<Organization> {
    return this.httpClient.get<Organization>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/${id}`);
  }
  getByIds(ids: string[]): Observable<Organization[]> {
    return this.httpClient.post<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/ids`, ids);
  }
  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/count`);
  }
  getAllByUser(id: number): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/users/${id}`);
  }
  getAllByLoggedUser(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/users`);
  }
  getAllCreatedByCurrentUser(): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/createdBy`);
  }
  countAllCreatedByCurrentUser(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/createdBy/count`);
  }
  getAllCreatedByUser(username: string): Observable<Organization[]> {
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/createdBy/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/createdBy/${username}/count`);
  }
  createBatch(payload: Organization[]): Observable<Organization[]> {
    return this.httpClient.post<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<Organization[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<Organization[]>(
      `${this.rootService.serverUrl}${OrganizationService.ROOT_PATH}/range`, {params});
  }

}
