import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BackendService} from "../models/backend-service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  private static readonly ROOT_PATH: string = '/backend-services';
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<BackendService[]> {
    return this.httpClient.get<BackendService[]>(`${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}`);
  }
  update(payload: BackendService): Observable<BackendService> {
    return this.httpClient.put<BackendService>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}`, payload);
  }
  create(payload: BackendService): Observable<BackendService> {
    return this.httpClient.post<BackendService>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}`, payload);
  }
  getById(id: string): Observable<BackendService> {
    return this.httpClient.get<BackendService>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/${id}`);
  }
  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/count`);
  }
  delete(payload: BackendService): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/delete`, payload);
  }
  createBatch(payload: BackendService[]): Observable<BackendService[]> {
    return this.httpClient.post<BackendService[]>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<BackendService[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<BackendService[]>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<BackendService[]> {
    return this.httpClient.get<BackendService[]>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/users`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/users/count`);
  }
  getAllCreatedByUser(username: string): Observable<BackendService[]> {
    return this.httpClient.get<BackendService[]>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/users/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BackendServiceService.ROOT_PATH}/users/${username}/count`);
  }
}
