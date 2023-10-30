import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BasicUser} from "../models/basic-user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BasicUserService {

  private static readonly ROOT_PATH: string = '/users/basic'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<BasicUser[]> {
    return this.httpClient.get<BasicUser[]>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}`);
  }
  getById(id: number): Observable<BasicUser> {
    return this.httpClient.get<BasicUser>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/count`);
  }
  range(from?: Date, to?: Date): Observable<BasicUser[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<BasicUser[]>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<BasicUser[]> {
    return this.httpClient.get<BasicUser[]>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/user`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/user/count`);
  }
  getAllCreatedByUser(username: string): Observable<BasicUser[]> {
    return this.httpClient.get<BasicUser[]>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/usernames/${username}`);
  }

  getAllByUUid(uuid: string): Observable<BasicUser> {
    return this.httpClient.get<BasicUser>(
      `${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/uuid/${uuid}`);
  }
}
