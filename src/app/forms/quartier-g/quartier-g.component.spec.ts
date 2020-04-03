import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierGComponent } from './quartier-g.component';

describe('QuartierGComponent', () => {
  let component: QuartierGComponent;
  let fixture: ComponentFixture<QuartierGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
