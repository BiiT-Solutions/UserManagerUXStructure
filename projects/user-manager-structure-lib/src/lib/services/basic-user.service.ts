import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Observable} from "rxjs";
import {BasicUser} from "../models/basic-user";

@Injectable({
  providedIn: 'root'
})
export class BasicUserService {

  private static readonly ROOT_PATH: string = '/users/basic';

  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }
  public getAll(): Observable<BasicUser[]> {
    return this.httpClient.get<BasicUser[]>(`${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}`);
  }
  public getById(id: string): Observable<BasicUser> {
    return this.httpClient.get<BasicUser>(`${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/${id}`);
  }
  public getByUUID(uuid: string): Observable<BasicUser> {
    return this.httpClient.get<BasicUser>(`${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/uuids/${uuid}`);
  }
  public getByUserName(username: string): Observable<BasicUser> {
    return this.httpClient.get<BasicUser>(`${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/usernames/${username}`);
  }
  public count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${BasicUserService.ROOT_PATH}/count`);
  }
}
