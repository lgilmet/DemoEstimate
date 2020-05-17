import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHomeComponent } from './old-home.component';

describe('OldHomeComponent', () => {
  let component: OldHomeComponent;
  let fixture: ComponentFixture<OldHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
