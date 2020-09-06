import { Component, OnInit, ChangeDetectionStrategy, Input, HostListener, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'hm-game-over-menu',
  templateUrl: './game-over-menu.component.html',
  styleUrls: ['./game-over-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameOverMenuComponent implements OnInit {
  @Input() gameLost: boolean;
  @Output() resetEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
