import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadpacienteComponent } from './cadpaciente.component';

describe('CadpacienteComponent', () => {
  let component: CadpacienteComponent;
  let fixture: ComponentFixture<CadpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
