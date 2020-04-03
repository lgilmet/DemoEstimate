import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartierFComponent } from './quartier-f.component';

describe('QuartierFComponent', () => {
  let component: QuartierFComponent;
  let fixture: ComponentFixture<QuartierFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuartierFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuartierFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
