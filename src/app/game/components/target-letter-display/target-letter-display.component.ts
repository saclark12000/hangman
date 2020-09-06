import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { TargetLetterModel } from '../../data-models';

@Component({
  selector: 'hm-target-letter-display',
  templateUrl: './target-letter-display.component.html',
  styleUrls: ['./target-letter-display.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TargetLetterDisplayComponent implements OnInit {
  @Input() targetLetters: Array<TargetLetterModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
