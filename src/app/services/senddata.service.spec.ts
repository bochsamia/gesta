import { TestBed } from '@angular/core/testing';

import { SenddataService } from './senddata.service';

describe('SenddataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SenddataService = TestBed.get(SenddataService);
    expect(service).toBeTruthy();
  });
});
