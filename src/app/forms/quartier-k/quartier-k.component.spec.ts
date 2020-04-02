import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierKComponent } from './quartier-k.component';

describe('QuartierKComponent', () => {
  let component: QuartierKComponent;
  let fixture: ComponentFixture<QuartierKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
