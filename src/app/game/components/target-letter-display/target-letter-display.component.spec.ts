import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLetterDisplayComponent } from './target-letter-display.component';

describe('TargetLetterDisplayComponent', () => {
  let component: TargetLetterDisplayComponent;
  let fixture: ComponentFixture<TargetLetterDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetLetterDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetLetterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
