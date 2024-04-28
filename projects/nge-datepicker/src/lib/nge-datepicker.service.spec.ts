import { TestBed } from '@angular/core/testing';

import { NgeDatepickerService } from './nge-datepicker.service';

describe('NgDatepickerService', () => {
  let service: NgeDatepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgeDatepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
