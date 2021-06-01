import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoramaComponent } from './dorama.component';

describe('DoramaComponent', () => {
  let component: DoramaComponent;
  let fixture: ComponentFixture<DoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
