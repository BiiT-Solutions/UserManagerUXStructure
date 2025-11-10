import { Injectable } from '@angular/core';
import {RootPath} from '@biit-solutions/authorization-services';

@Injectable({
  providedIn: 'root'
})
export class UserManagerRootService implements RootPath {

  private rootUrl: URL = null;

  constructor() { }

  public set serverUrl(url: URL) {
    this.rootUrl = url;
  }

  public get serverUrl(): URL {
    return this.rootUrl;
  }

  getRootPath(): URL {
    return this.rootUrl;
  }
}
