import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Group} from "../models/group";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private static readonly ROOT_PATH: string = '/groups'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`);
  }
  update(group: Group): Observable<Group> {
    return this.httpClient.put<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`, group);
  }
  create(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`, group);
  }
  getById(id: number): Observable<Group> {
    return this.httpClient.get<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${id}`);
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/count`);
  }
  delete(group: Group): Observable<void> {
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/delete`, group);
  }
  getByGroupNameAndApplicationName(groupName: string, applicationName: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${groupName}/applications/${applicationName}`);
  }
  deleteByGroupNameAndApplicationName(groupName: string, applicationName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${groupName}/applications/${applicationName}`);
  }
  getAllWithParents(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/has-parent`);
  }
  createBatch(groups: Group[]): Observable<Group[]> {
    return this.httpClient.post<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/list`, groups);
  }
  getAllWithNoParent(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/no-parent`);
  }
  range(from: Date, to: Date): Observable<Group[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/user`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/user/count`);
  }
  getAllCreatedByUser(username: string): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/user/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/user/${username}/count`);
  }
}
