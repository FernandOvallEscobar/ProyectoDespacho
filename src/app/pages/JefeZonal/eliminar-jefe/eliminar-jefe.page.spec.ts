import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarJefePage } from './eliminar-jefe.page';

describe('EliminarJefePage', () => {
  let component: EliminarJefePage;
  let fixture: ComponentFixture<EliminarJefePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarJefePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
