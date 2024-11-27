import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarTiendasPage } from './agregar-tiendas.page';

describe('AgregarTiendasPage', () => {
  let component: AgregarTiendasPage;
  let fixture: ComponentFixture<AgregarTiendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTiendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
