import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SamolePage12Page } from './samole-page12.page';

describe('SamolePage12Page', () => {
  let component: SamolePage12Page;
  let fixture: ComponentFixture<SamolePage12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SamolePage12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
