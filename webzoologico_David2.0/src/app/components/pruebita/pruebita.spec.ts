import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebita } from './pruebita';

describe('Pruebita', () => {
  let component: Pruebita;
  let fixture: ComponentFixture<Pruebita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pruebita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pruebita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
