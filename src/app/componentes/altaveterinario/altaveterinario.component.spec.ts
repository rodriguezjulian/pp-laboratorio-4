import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaveterinarioComponent } from './altaveterinario.component';

describe('AltaveterinarioComponent', () => {
  let component: AltaveterinarioComponent;
  let fixture: ComponentFixture<AltaveterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltaveterinarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltaveterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
