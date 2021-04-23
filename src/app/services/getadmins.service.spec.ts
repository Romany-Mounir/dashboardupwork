import { TestBed } from '@angular/core/testing';

import { GetadminsService } from './getadmins.service';

describe('GetadminsService', () => {
  let service: GetadminsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetadminsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
