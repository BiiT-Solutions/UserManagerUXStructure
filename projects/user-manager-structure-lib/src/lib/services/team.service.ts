import {Injectable} from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../models/team";
import {User} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private static readonly ROOT_PATH: string = '/teams'

  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) {
  }

  getAll(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}`);
  }

  update(team: Team): Observable<Team> {
    return this.httpClient.put<Team>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}`, team);
  }

  create(team: Team): Observable<Team> {
    return this.httpClient.post<Team>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}`, team);
  }

  getById(id: number): Observable<Team> {
    return this.httpClient.get<Team>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/${id}`);
  }

  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/${id}`);
  }

  count(): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/count`);
  }

  delete(team: Team): Observable<void> {
    return this.httpClient.post<void>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/delete`, team);
  }

  getByGroupNameAndApplicationName(teamName: string, organizationName: string): Observable<Team> {
    return this.httpClient.get<Team>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}`);
  }

  deleteByGroupNameAndApplicationName(teamName: string, organizationName: string): Observable<void> {
    return this.httpClient.delete<void>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}`);
  }

  checkTeamName(teamName: string, organizationName: string): Observable<void> {
    return this.httpClient.get<void>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}}/names/${teamName}/organizations/${organizationName}/check`);
  }

  getAllWithParents(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/has-parent`);
  }

  createBatch(teams: Team[]): Observable<Team[]> {
    return this.httpClient.post<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/list`, teams);
  }

  getAllWithNoParent(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/no-parent`);
  }

  getAllByParent(parentId: number): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/parent/${parentId}`);
  }

  getAllByOrganization(organizationId: string): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/organizations/${organizationId}`);
  }

  getAllByOrganizationPublic(organizationId: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/public/organizations/${organizationId}`);
  }

  range(from: Date, to: Date): Observable<Team[]> {
    const params: HttpParams = new HttpParams().set('from', from.toISOString()).set('to', to.toISOString());
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/range`, {params});
  }

  assignUsersByTeamNameAndUserNames(teamName: string, organizationName: string, usernames: String[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}/usernames`, usernames);
  }

  assignUsersByTeamName(teamName: string, organizationName: string, users: User[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}/users`, users);
  }

  assignUsers(id: number, users: User[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/${id}/users`, users);
  }

  unassignUsersByTeamNameAndUserNames(teamName: string, organizationName: string, users: User[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}/users/remove`, users);
  }

  unassignUsersByTeamName(teamName: string, organizationName: string, usernames: String[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/names/${teamName}/organizations/${organizationName}/usernames/remove`, usernames);
  }

  unassignUsers(id: number, users: User[]): Observable<User[]> {
    return this.httpClient.post<User[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/${id}/users/remove`, users);
  }

  getAllCreatedByUser(username: string): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/users/${username}`);
  }

  countAllCreatedByUser(username: string): Observable<number> {
    return this.httpClient.get<number>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/users/${username}/count`);
  }

  getAllTeamsForAUser(userUUId: string): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.rootService.serverUrl}${TeamService.ROOT_PATH}/users/${userUUId}`);
  }
}
