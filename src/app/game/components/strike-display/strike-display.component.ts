import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'hm-strike-display',
  templateUrl: './strike-display.component.html',
  styleUrls: ['./strike-display.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StrikeDisplayComponent implements OnInit {

  @Input() strikes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
