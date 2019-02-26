import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TextService {
  constructor(private http: HttpClient) {
  }

  getDumbText(): Observable<string[]> {
    const str = 'A year ago I was in the audience at a gathering of designers in San Francisco. There were four designers on stage, ' +
      'and two of them worked for me. I was there to support them.';
    return of(str.split(' '));
  }

  getSynonym(syn: string): Observable<object> {
   return this.http.get(`https://api.datamuse.com/words?rel_syn=${syn}`);
  }
}
