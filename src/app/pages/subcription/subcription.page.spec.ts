import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionPage } from './subcription.page';

describe('SubcriptionPage', () => {
  let component: SubcriptionPage;
  let fixture: ComponentFixture<SubcriptionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcriptionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
