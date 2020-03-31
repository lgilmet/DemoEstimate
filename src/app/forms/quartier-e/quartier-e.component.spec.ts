import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierEComponent } from './quartier-e.component';

describe('QuartierEComponent', () => {
  let component: QuartierEComponent;
  let fixture: ComponentFixture<QuartierEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
