import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
