import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebarutaComponent } from './pruebaruta.component';

describe('PruebarutaComponent', () => {
  let component: PruebarutaComponent;
  let fixture: ComponentFixture<PruebarutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebarutaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PruebarutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
