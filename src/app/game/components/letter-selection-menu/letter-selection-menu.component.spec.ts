import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSelectionMenuComponent } from './letter-selection-menu.component';

describe('LetterSelectionMenuComponent', () => {
  let component: LetterSelectionMenuComponent;
  let fixture: ComponentFixture<LetterSelectionMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterSelectionMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterSelectionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
