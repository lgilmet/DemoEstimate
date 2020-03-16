import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierCComponent } from './quartier-c.component';

describe('QuartierCComponent', () => {
  let component: QuartierCComponent;
  let fixture: ComponentFixture<QuartierCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
