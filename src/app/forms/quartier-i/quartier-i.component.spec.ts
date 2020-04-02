import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierIComponent } from './quartier-i.component';

describe('QuartierIComponent', () => {
  let component: QuartierIComponent;
  let fixture: ComponentFixture<QuartierIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
