export class Word {
   word: string;
   isBold: boolean;
   isCursive: boolean;
   isUnderline: boolean;
   constructor(word: string, isBold: boolean, isCursive: boolean, isUnderline: boolean) {
     this.word = word;
     this.isBold = isBold;
     this.isCursive = isCursive;
     this.isUnderline = isUnderline;
   }
}

export enum Styles {
  Bold = 1,
  Cursive = 2,
  Underline = 3,
}

export interface Synonyms {
  word: string;
  score: number;
}
