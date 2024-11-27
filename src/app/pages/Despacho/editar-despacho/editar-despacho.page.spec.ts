import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDespachoPage } from './editar-despacho.page';

describe('EditarDespachoPage', () => {
  let component: EditarDespachoPage;
  let fixture: ComponentFixture<EditarDespachoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarDespachoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
