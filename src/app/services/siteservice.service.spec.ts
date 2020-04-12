import { TestBed } from '@angular/core/testing';

import { SiteserviceService } from './siteservice.service';

describe('SiteserviceService', () => {
  let service: SiteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
