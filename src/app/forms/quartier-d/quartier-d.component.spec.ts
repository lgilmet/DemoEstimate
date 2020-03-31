import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierDComponent } from './quartier-d.component';

describe('QuartierDComponent', () => {
  let component: QuartierDComponent;
  let fixture: ComponentFixture<QuartierDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
