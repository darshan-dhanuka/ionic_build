import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowtheleaguePage } from './knowtheleague.page';

describe('KnowtheleaguePage', () => {
  let component: KnowtheleaguePage;
  let fixture: ComponentFixture<KnowtheleaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowtheleaguePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowtheleaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
