import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Role} from "../models/role";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private static readonly ROOT_PATH: string = '/roles';
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  public getAll(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`);
  }
  public update(role: Role): Observable<Role> {
    return this.httpClient.put<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`, role);
  }
  public create(role: Role): Observable<Role> {
    return this.httpClient.post<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}`, role);
  }
  public createBunch(role: Role[]): Observable<Role[]> {
    return this.httpClient.post<Role[]>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/list`, role);
  }
  public getById(id: string): Observable<Role> {
    return this.httpClient.get<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/${id}`);
  }
  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/${id}`);
  }
  public getByName(name: string): Observable<Role> {
    return this.httpClient.get<Role>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/name/${name}`);
  }
  public countRoles(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${RoleService.ROOT_PATH}/count`);
  }
}
