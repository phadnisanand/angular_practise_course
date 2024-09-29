import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contentproparent',
  templateUrl: './contentproparent.component.html',
  styleUrls: ['./contentproparent.component.css']
})
export class ContentproparentComponent implements OnInit {

  constructor() { }
  tabs: any[];
  ngOnInit(): void {
    this.tabs = [
      { title: "First Tab title", content: "First Tab content" },
      { title: "Second Tab title", content: "Second Tab content" },
      { title: "Third Tab title", content: "Third Tab content" }
      ];
  }

}
