import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarTiendaPage } from './editar-tienda.page';

describe('EditarTiendaPage', () => {
  let component: EditarTiendaPage;
  let fixture: ComponentFixture<EditarTiendaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
