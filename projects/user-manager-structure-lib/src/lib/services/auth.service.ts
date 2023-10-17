import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserManagerRootService} from "./user-manager-root.service";
import {AuthService as AuthenticationService} from "authorization-services-lib";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AuthenticationService {

  constructor(rootService: UserManagerRootService, httpClient: HttpClient) {
    super(rootService, httpClient);
  }
}
