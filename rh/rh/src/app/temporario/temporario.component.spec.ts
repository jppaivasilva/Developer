import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporarioComponent } from './temporario.component';

describe('TemporarioComponent', () => {
  let component: TemporarioComponent;
  let fixture: ComponentFixture<TemporarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemporarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemporarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
