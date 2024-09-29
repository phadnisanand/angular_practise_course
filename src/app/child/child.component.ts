import { Component, EventEmitter, Input, OnChanges, OnInit, Output,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges {
  @Output() greetEvent = new EventEmitter();
  @Input('childPassData') childVal: any;
  @Input() parentData: any;
  constructor() { }
  name:string = 'Event Emitter demo';
  ngOnInit(): void {
    this.childVal = this.childVal;
  }
  callParentGreet() {
    this.greetEvent.emit(this.name);
  }
  childMethod() {
    return 'testing child';
  }
  whoAmI() {
    return 'I am a child component!';
  }
  changeFromChild() {
    this.parentData -= 1;
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called', changes);
  }
}
