import { TestBed } from '@angular/core/testing';

import { BackendServiceRoleService } from './backend-service-role.service';

describe('BackendServiceRoleService', () => {
  let service: BackendServiceRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendServiceRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
