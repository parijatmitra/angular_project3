import { TestBed } from '@angular/core/testing';

import { TaskPassService } from './task-pass.service';

describe('TaskPassService', () => {
  let service: TaskPassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskPassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
