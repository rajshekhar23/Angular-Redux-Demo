/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SharedtableComponent } from './sharedtable.component';

describe('SharedtableComponent', () => {
  let component: SharedtableComponent;
  let fixture: ComponentFixture<SharedtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
