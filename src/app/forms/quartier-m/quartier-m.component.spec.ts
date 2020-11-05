import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierMComponent } from './quartier-m.component';

describe('QuartierMComponent', () => {
  let component: QuartierMComponent;
  let fixture: ComponentFixture<QuartierMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
