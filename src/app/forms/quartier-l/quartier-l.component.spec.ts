import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierLComponent } from './quartier-l.component';

describe('QuartierLComponent', () => {
  let component: QuartierLComponent;
  let fixture: ComponentFixture<QuartierLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
