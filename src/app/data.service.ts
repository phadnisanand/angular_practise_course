import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private subject = new BehaviorSubject<any>('Hello');

  sendData(data: any) {
      this.subject.next({ text: data });
  }

  clearData() {
      this.subject.next('');
  }

  getData(): Observable<any> {
      return this.subject.asObservable();
  }

}
