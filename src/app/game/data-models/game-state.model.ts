export class GameStateModel {
  availableLetters: Array<TargetLetterModel> = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("").map(letter => new TargetLetterModel(letter));
  targetLetters: Array<TargetLetterModel>;
  strikes: number = 0;
  maxStrikes: number = 6;

  constructor(inputTarget: string){
    this.targetLetters = inputTarget.split("").map(letter => new TargetLetterModel(letter));
  }
}

export class TargetLetterModel {
  letter: string;
  selected: boolean = false;
  constructor(inputLetter: string) {
    this.letter = inputLetter
    this.selected = !inputLetter.match(/[A-Z]/g);
  }
}
