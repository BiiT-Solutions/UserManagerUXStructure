import { TestBed } from '@angular/core/testing';

import { ApplicationBackendServiceRoleService } from './application-backend-service-role.service';

describe('ApplicationBackendServiceRoleService', () => {
  let service: ApplicationBackendServiceRoleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationBackendServiceRoleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
