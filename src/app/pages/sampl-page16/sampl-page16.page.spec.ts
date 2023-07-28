import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamplPage16Page } from './sampl-page16.page';

describe('SamplPage16Page', () => {
  let component: SamplPage16Page;
  let fixture: ComponentFixture<SamplPage16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamplPage16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
