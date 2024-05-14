import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenericaPage } from './generica.page';

describe('GenericaPage', () => {
  let component: GenericaPage;
  let fixture: ComponentFixture<GenericaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
