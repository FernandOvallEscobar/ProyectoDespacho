import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarDespachosPage } from './agregar-despachos.page';

describe('AgregarDespachosPage', () => {
  let component: AgregarDespachosPage;
  let fixture: ComponentFixture<AgregarDespachosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarDespachosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
