import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverMenuComponent } from './game-over-menu.component';

describe('GameOverMenuComponent', () => {
  let component: GameOverMenuComponent;
  let fixture: ComponentFixture<GameOverMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameOverMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOverMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
