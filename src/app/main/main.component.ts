import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  msgtochild:string = 'from parent changes';
  userLoggedIn = false;
  constructor() { }

  ngOnInit(): void {

  }

}
