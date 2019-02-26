import {Component, OnInit} from '@angular/core';
import {Synonyms, Styles, Word} from './Types/types';
import {TextService} from './text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  styles = Styles;
  selectedWord: Word;
  words: Word[] = [];
  synonyms: Synonyms[] = [];
  plainText: string;

  constructor(private textService: TextService) {}

  ngOnInit(): void {
    this.textService.getDumbText().subscribe((data: string[]) => {
      this.plainText = data.join(' ');
      this.plainTextToWordsType(data);
      this.wordSelected(this.words[0]);
    });
  }

  plainTextToWordsType(data: string[]): void {
    this.words = [];
    data.forEach((word) => {
      this.words.push(new Word(word, false, false, false));
    });
  }

  wordSelected(word: Word): void {
    this.selectedWord = word;
    this.textService.getSynonym(word.word).subscribe((data: Synonyms[]) => {
      this.synonyms = data;
    });
  }
  addStyleToWord(style: Styles): void {
    switch (style) {
      case 1: this.selectedWord.isBold = !this.selectedWord.isBold;
              break;
      case 2: this.selectedWord.isCursive = !this.selectedWord.isCursive;
              break;
      case 3: this.selectedWord.isUnderline = !this.selectedWord.isUnderline;
              break;
    }
  }
  replace(syn: Synonyms) {
    this.selectedWord.word = syn.word;
  }
  updateText(val: any): void {
    this.plainText = val;
    this.plainTextToWordsType(this.plainText.split(' '));
  }
}
