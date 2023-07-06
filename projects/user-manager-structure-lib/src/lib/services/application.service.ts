import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {Application} from "../models/application";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private static readonly ROOT_PATH: string = '/applications';
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }
  public getAll(): Observable<Application[]> {
    return this.httpClient.get<Application[]>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`);
  }
  public update(application: Application): Observable<Application> {
    return this.httpClient.put<Application>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`, application);
  }
  public create(application: Application): Observable<Application> {
    return this.httpClient.post<Application>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}`, application);
  }
  public createBunch(applications: Application[]): Observable<Application[]> {
    return this.httpClient.post<Application[]>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/list`, applications);
  }
  public getById(id: string): Observable<Application> {
    return this.httpClient.get<Application>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/${id}`);
  }
  public delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/${id}`);
  }
  public countApplications(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${ApplicationService.ROOT_PATH}/count`);
  }
}
