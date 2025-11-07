import { TestBed } from '@angular/core/testing';

import { UserManagerRootService } from './user-manager-root.service';

describe('UserManagerRootService', () => {
  let service: UserManagerRootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserManagerRootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
