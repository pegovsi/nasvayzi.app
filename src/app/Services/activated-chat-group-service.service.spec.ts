import { TestBed } from '@angular/core/testing';

import { ActivatedChatGroupServiceService } from './activated-chat-group-service.service';

describe('ActivatedChatGroupServiceService', () => {
  let service: ActivatedChatGroupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivatedChatGroupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
