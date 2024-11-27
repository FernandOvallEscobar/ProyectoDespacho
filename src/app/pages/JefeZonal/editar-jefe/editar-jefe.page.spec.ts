import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarJefePage } from './editar-jefe.page';

describe('EditarJefePage', () => {
  let component: EditarJefePage;
  let fixture: ComponentFixture<EditarJefePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarJefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
