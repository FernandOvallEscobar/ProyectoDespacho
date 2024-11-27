import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarJefePage } from './listar-jefe.page';

describe('ListarJefePage', () => {
  let component: ListarJefePage;
  let fixture: ComponentFixture<ListarJefePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarJefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
