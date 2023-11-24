import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskPassService {

  constructor() { }

  private cardComponentInputdata:Subject<string> = new Subject<string>();
  $cardComponentInputdataObservable = this.cardComponentInputdata.asObservable();
  emitfromCardComponent(value: string) {
    this.cardComponentInputdata.next(value);
    console.log(value);
  }  
}
