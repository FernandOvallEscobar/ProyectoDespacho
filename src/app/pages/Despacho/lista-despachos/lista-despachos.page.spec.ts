import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaDespachosPage } from './lista-despachos.page';

describe('ListaDespachosPage', () => {
  let component: ListaDespachosPage;
  let fixture: ComponentFixture<ListaDespachosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDespachosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
