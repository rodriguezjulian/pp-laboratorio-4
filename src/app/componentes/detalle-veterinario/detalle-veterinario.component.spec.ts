import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVeterinarioComponent } from './detalle-veterinario.component';

describe('DetalleVeterinarioComponent', () => {
  let component: DetalleVeterinarioComponent;
  let fixture: ComponentFixture<DetalleVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVeterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
