import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  private _loggedIn: boolean;
  constructor() { }
  get loggedInn(): boolean {
    return this._loggedIn;
  }
  @Input()
  set loggedInn(value: boolean) {
    this._loggedIn = value;
  }
  ngOnInit(): void {
  }

}
