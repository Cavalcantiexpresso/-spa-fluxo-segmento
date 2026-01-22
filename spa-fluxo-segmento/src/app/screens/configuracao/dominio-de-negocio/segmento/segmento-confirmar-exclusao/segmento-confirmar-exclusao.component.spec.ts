import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoConfirmarExclusaoComponent } from './segmento-confirmar-exclusao.component';

describe('SegmentoConfirmarExclusaoComponent', () => {
  let component: SegmentoConfirmarExclusaoComponent;
  let fixture: ComponentFixture<SegmentoConfirmarExclusaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentoConfirmarExclusaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegmentoConfirmarExclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
