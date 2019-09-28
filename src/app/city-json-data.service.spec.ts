import { TestBed } from '@angular/core/testing';

import { CityJsonDataService } from './city-json-data.service';

describe('CityJsonDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityJsonDataService = TestBed.get(CityJsonDataService);
    expect(service).toBeTruthy();
  });
});
