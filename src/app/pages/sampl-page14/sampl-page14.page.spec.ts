import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplPage14Page } from './sampl-page14.page';

describe('SamplPage14Page', () => {
  let component: SamplPage14Page;
  let fixture: ComponentFixture<SamplPage14Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplPage14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
