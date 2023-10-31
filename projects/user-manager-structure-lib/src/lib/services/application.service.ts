import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Application} from "../models/application";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  private static readonly ROOT_PATH: string = '/applications'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`);
  }

  update(payload: Application): Observable<Application> {
    return this.httpClient.put<Application>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`, payload);
  }
  create(payload: Application): Observable<Application> {
    return this.httpClient.post<Application>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`, payload);
  }
  getById(id: string): Observable<Application> {
    return this.httpClient.get<Application>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/${id}`);
  }
  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/count`);
  }
  delete(payload: Application): Observable<void> {
    return this.httpClient.post<void>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/delete`, payload);
  }
  createBatch(payload: Application[]): Observable<Application[]> {
    return this.httpClient.post<Application[]>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/list`, payload);
  }
  range(from?: Date, to?: Date): Observable<Application[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<Application[]>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/users`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/users/count`);
  }
  getAllCreatedByUser(username: string): Observable<Application[]> {
    return this.httpClient.get<Application[]>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/users/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/users/${username}/count`);
  }
}
