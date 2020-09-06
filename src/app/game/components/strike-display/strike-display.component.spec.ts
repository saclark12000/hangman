import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrikeDisplayComponent } from './strike-display.component';

describe('StrikeDisplayComponent', () => {
  let component: StrikeDisplayComponent;
  let fixture: ComponentFixture<StrikeDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrikeDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrikeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
