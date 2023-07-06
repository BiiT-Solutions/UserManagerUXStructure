import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Group} from "../models/group";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  private static readonly ROOT_PATH: string = '/groups';
  constructor(private rootService: UserManagerRootService , private httpClient: HttpClient) { }

  public getAll(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`);
  }
  public update(group: Group): Observable<Group> {
    return this.httpClient.put<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`, group);
  }
  public create(group: Group): Observable<Group> {
    return this.httpClient.post<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}`, group);
  }
  public createBunch(group: Group[]): Observable<Group[]> {
    return this.httpClient.post<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/list`, group);
  }
  public getById(id: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${id}`);
  }
  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/${id}`);
  }
  public getHasNoParent(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/no-parent`);
  }
  public getByName(name: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/names/${name}`);
  }
  public deleteByName(name: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/names/${name}`);
  }
  public getHasParent(): Observable<Group[]> {
    return this.httpClient.get<Group[]>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/has-parent`);
  }
  public countGroups(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${GroupService.ROOT_PATH}/count`);
  }
}
