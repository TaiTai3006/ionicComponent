import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplPage13Page } from './sampl-page13.page';

describe('SamplPage13Page', () => {
  let component: SamplPage13Page;
  let fixture: ComponentFixture<SamplPage13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplPage13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
