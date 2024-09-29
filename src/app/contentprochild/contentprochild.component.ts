import { Component, Input, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-contentprochild',
  templateUrl: './contentprochild.component.html',
  styleUrls: ['./contentprochild.component.css']
})
export class ContentprochildComponent implements OnInit,AfterContentInit {
  @Input() tab: object;
  title:string;
  content:string;
  constructor() { }

  ngOnInit(): void {

  }
  ngAfterContentInit() {
    this.title = this.tab['title'];
    this.content = this.tab['content'];
  }

}
