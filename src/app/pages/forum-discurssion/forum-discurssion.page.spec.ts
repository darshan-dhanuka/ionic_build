import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumDiscurssionPage } from './forum-discurssion.page';

describe('ForumDiscurssionPage', () => {
  let component: ForumDiscurssionPage;
  let fixture: ComponentFixture<ForumDiscurssionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumDiscurssionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumDiscurssionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
