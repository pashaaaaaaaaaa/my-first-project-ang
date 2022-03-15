import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForRegistrationComponent } from './for-registration.component';

describe('ForRegistrationComponent', () => {
  let component: ForRegistrationComponent;
  let fixture: ComponentFixture<ForRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
