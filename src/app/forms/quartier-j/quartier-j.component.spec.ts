import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierJComponent } from './quartier-j.component';

describe('QuartierJComponent', () => {
  let component: QuartierJComponent;
  let fixture: ComponentFixture<QuartierJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
