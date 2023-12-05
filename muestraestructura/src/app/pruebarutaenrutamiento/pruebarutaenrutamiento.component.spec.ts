import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebarutaenrutamientoComponent } from './pruebarutaenrutamiento.component';

describe('PruebarutaenrutamientoComponent', () => {
  let component: PruebarutaenrutamientoComponent;
  let fixture: ComponentFixture<PruebarutaenrutamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebarutaenrutamientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebarutaenrutamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
