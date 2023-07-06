import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserManagerRootService {

  private rootUrl: URL = null;

  constructor() { }

  public set serverUrl(url: URL) {
    this.rootUrl = url;
  }

  public get serverUrl(): URL {
    return this.rootUrl;
  }
}
