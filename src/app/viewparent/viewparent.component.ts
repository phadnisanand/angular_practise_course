import { Component, OnInit, ViewChild,ElementRef, AfterViewInit } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';
@Component({
  selector: 'app-viewparent',
  templateUrl: './viewparent.component.html',
  styleUrls: ['./viewparent.component.css']
})
export class ViewparentComponent implements OnInit {
  @ViewChild("childMethod") method! : ViewchildComponent;


  constructor() { }

  ngOnInit(): void {
  }

  parentFunction()
  {
    this.method.viewdemo();
    this.method.childalert.nativeElement.style.color = 'grey';
  }

}
