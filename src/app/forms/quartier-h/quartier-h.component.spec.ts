import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierHComponent } from './quartier-h.component';

describe('QuartierHComponent', () => {
  let component: QuartierHComponent;
  let fixture: ComponentFixture<QuartierHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
