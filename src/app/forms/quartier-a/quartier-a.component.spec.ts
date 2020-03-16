import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierAComponent } from './quartier-a.component';

describe('QuartierAComponent', () => {
  let component: QuartierAComponent;
  let fixture: ComponentFixture<QuartierAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
