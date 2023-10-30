import { Injectable } from '@angular/core';
import {UserManagerRootService} from "./user-manager-root.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CachingService {

  private static readonly ROOT_PATH: string = '/cache'
  constructor(private rootService: UserManagerRootService, private httpClient: HttpClient) { }

  clear(): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.rootService.serverUrl}${CachingService.ROOT_PATH}`);
  }
}
