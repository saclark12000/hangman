import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output, Input } from '@angular/core';
import { TargetLetterModel } from '../../data-models';

@Component({
  selector: 'hm-letter-selection-menu',
  templateUrl: './letter-selection-menu.component.html',
  styleUrls: ['./letter-selection-menu.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterSelectionMenuComponent implements OnInit {
  @Output() selectedLetterEvent = new EventEmitter<string>();
  @Input() availableLetters: Array<TargetLetterModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectLetter(letter:string) {
    this.selectedLetterEvent.emit(letter);
  }

}
