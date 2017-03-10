import { TestBed, inject } from '@angular/core/testing';

import { AzureSMSServiceService } from './azure-smsservice.service';

describe('AzureSMSServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AzureSMSServiceService]
    });
  });

  it('should ...', inject([AzureSMSServiceService], (service: AzureSMSServiceService) => {
    expect(service).toBeTruthy();
  }));
});
