import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private static readonly ROOT_PATH: string = '/roles'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  getAll(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`);
  }
  update(role: Role): Observable<Role> {
    return this.httpClient.put<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`, role);
  }
  create(role: Role): Observable<Role> {
    return this.httpClient.post<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`, role);
  }
  getById(id: string): Observable<Role> {
    return this.httpClient.get<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/${id}`);
  }
  deleteById(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/${id}`);
  }
  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/count`);
  }
  delete(role: Role): Observable<void> {
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/delete`, role);
  }
  createBatch(roles: Role[]): Observable<Role[]> {
    return this.httpClient.post<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/list`, roles);
  }
  getByName(name: string): Observable<Role> {
    return this.httpClient.get<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/name/${name}`);
  }
  range(from: Date, to: Date): Observable<Role[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/range`, {params});
  }
  getAllCreated(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/user`);
  }
  countAllCreated(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/user/count`);
  }
  getAllCreatedByUser(username: string): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/user/${username}`);
  }
  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/user/${username}/count`);
  }
}
