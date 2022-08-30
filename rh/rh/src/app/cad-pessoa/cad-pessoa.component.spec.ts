import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPessoaComponent } from './cad-pessoa.component';

describe('CadPessoaComponent', () => {
  let component: CadPessoaComponent;
  let fixture: ComponentFixture<CadPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadPessoaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
