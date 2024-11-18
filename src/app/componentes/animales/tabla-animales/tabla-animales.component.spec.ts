import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAnimalesComponent } from './tabla-animales.component';

describe('TablaAnimalesComponent', () => {
  let component: TablaAnimalesComponent;
  let fixture: ComponentFixture<TablaAnimalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaAnimalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaAnimalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
