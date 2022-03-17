import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrBooksComponent } from './wr-books.component';

describe('WrBooksComponent', () => {
  let component: WrBooksComponent;
  let fixture: ComponentFixture<WrBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
