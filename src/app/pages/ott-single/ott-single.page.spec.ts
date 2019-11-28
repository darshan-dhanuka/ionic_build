import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttSinglePage } from './ott-single.page';

describe('OttSinglePage', () => {
  let component: OttSinglePage;
  let fixture: ComponentFixture<OttSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttSinglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
