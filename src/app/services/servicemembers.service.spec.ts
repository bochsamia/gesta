import { TestBed } from '@angular/core/testing';

import { ServicemembersService } from './servicemembers.service';

describe('ServicemembersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicemembersService = TestBed.get(ServicemembersService);
    expect(service).toBeTruthy();
  });
});
