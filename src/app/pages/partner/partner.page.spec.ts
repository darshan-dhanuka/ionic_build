import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerPage } from './partner.page';

describe('PartnerPage', () => {
  let component: PartnerPage;
  let fixture: ComponentFixture<PartnerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
