import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarJefePage } from './agregar-jefe.page';

describe('AgregarJefePage', () => {
  let component: AgregarJefePage;
  let fixture: ComponentFixture<AgregarJefePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarJefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
