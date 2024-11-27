import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarTiendasPage } from './eliminar-tiendas.page';

describe('EliminarTiendasPage', () => {
  let component: EliminarTiendasPage;
  let fixture: ComponentFixture<EliminarTiendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarTiendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
