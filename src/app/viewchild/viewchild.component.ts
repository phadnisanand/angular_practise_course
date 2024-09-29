import { Component, OnInit, ViewChild, ViewChildren,QueryList,ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
  @ViewChildren('childheading') childheading!: QueryList<any>;
  @ViewChild("childalert") childalert!: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  viewdemo() {
    alert('from child');
  }

  ngAfterViewInit(): void {
    console.log(this.childheading)
    this.childheading.first.nativeElement.style.color = 'red';
    this.childheading.last.nativeElement.style.color = 'green';
    this.childalert.nativeElement.innerHTML = 'Anand';
  }

}
