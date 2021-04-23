import { TestBed } from '@angular/core/testing';

import { EditadminService } from './editadmin.service';

describe('EditadminService', () => {
  let service: EditadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
