import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authUnauthGuard } from './auth-unauth.guard';

describe('authUnauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authUnauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
