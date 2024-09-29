import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-depende',
  templateUrl: './depende.component.html',
  styleUrls: ['./depende.component.css']
})
export class DependeComponent implements OnInit,OnChanges{

  @Input()  loggdin:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

}
