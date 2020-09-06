import { Component, OnInit, ChangeDetectionStrategy, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from '../store/game.actions';
import * as selectors from '../store/game.selectors';
import * as models from '../data-models'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TargetLetterModel } from '../data-models';
import { WordList } from 'src/app/data-models/word-list.model';

@Component({
  selector: 'hm-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  targetLetters: string= "Hello world";

  availableLetters$ = new Observable<Array<TargetLetterModel>>();
  targetLetters$ = new Observable<Array<models.TargetLetterModel>>();
  strikes$ = new Observable<number>();
  isStruckOut$ = new Observable<boolean>();
  isStruckOut: boolean = false;
  isWordSolved$ = new Observable<boolean>();
  isWordSolved: boolean = false;
  gameLost: boolean = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
    console.log(this.targetLetters)
    this.reset();
    this.availableLetters$ = this.store.select(selectors.getAvailableLetters);
    this.targetLetters$ = this.store.select(selectors.getTargetLetters);
    this.strikes$ = this.store.select(selectors.getStrikes);
    this.isStruckOut$ = this.store.select(selectors.isStruckOut);
    this.isStruckOut$.pipe(tap(state=> this.isStruckOut = state)).subscribe();
    this.isWordSolved$ = this.store.select(selectors.isWordSolved);
    this.isWordSolved$.pipe(tap(state=> this.isWordSolved = state)).subscribe();
  }

  selectLetter(letter: string){
    let isValid: boolean;
    this.store.select(selectors.isSelectedTargeted, {selectedLetter: letter}).pipe(tap(check => isValid = check)).subscribe();
    this.store.dispatch(actions.selectLetter({selectedLetter: letter}));
    if(!isValid){
      this.store.dispatch(actions.strike());
      this.gameLost = this.isStruckOut
    }
    if(this.isStruckOut || this.isWordSolved){
      this.store.dispatch(actions.gameOver());
    }
  }

  reset(){
    this.store.dispatch(actions.reset({targetLetters:this.randomWord}));
  }

  get randomWord() {
    const randomNumber = Math.floor(Math.random() * (Object.keys(WordList).length/2));
    return WordList[randomNumber] || WordList[1];
  }

}
