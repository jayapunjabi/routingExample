import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrHelpDeskComponent } from './hr-help-desk.component';

describe('HrHelpDeskComponent', () => {
  let component: HrHelpDeskComponent;
  let fixture: ComponentFixture<HrHelpDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrHelpDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrHelpDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
