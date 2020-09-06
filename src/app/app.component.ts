import { Component } from '@angular/core';
import { WordList } from './data-models/word-list.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'hangman';

}
