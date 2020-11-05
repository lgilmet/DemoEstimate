import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MComponentComponent } from './mcomponent.component';

describe('MComponentComponent', () => {
  let component: MComponentComponent;
  let fixture: ComponentFixture<MComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
