import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierBComponent } from './quartier-b.component';

describe('QuartierBComponent', () => {
  let component: QuartierBComponent;
  let fixture: ComponentFixture<QuartierBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
