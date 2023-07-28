import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplPage15Page } from './sampl-page15.page';

describe('SamplPage15Page', () => {
  let component: SamplPage15Page;
  let fixture: ComponentFixture<SamplPage15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplPage15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
