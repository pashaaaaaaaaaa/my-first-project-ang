import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationBookComponent } from './pagination-book.component';

describe('PaginationBookComponent', () => {
  let component: PaginationBookComponent;
  let fixture: ComponentFixture<PaginationBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
