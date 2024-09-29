import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  private _messageSource = new Subject<string>();
  teacherMessage$ = this._messageSource.asObservable();

  sendMessage(message: string) {
    this._messageSource.next(message);
  }
}
