import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OttPage } from './ott.page';

describe('OttPage', () => {
  let component: OttPage;
  let fixture: ComponentFixture<OttPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OttPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OttPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
