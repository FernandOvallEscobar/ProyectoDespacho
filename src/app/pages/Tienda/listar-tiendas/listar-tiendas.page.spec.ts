import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarTiendasPage } from './listar-tiendas.page';

describe('ListarTiendasPage', () => {
  let component: ListarTiendasPage;
  let fixture: ComponentFixture<ListarTiendasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTiendasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
