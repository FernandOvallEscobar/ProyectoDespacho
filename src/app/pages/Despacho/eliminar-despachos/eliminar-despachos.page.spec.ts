import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarDespachosPage } from './eliminar-despachos.page';

describe('EliminarDespachosPage', () => {
  let component: EliminarDespachosPage;
  let fixture: ComponentFixture<EliminarDespachosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDespachosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
