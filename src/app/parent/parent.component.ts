import { AfterViewInit, Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {
  parentMsg:string = '';
  data = 0
  constructor() { }
  @ViewChild(ChildComponent) childref!: ChildComponent;
  childPassData:string = 'Data from parent';
  ngOnInit(): void {
  }
  greet(name:string) {
    alert(name);

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      console.log(this.childref.name);
      this.parentMsg= this.childref.whoAmI(); // I am a pup component!
    }, 0);
  }
  changeFromParent(){
    this.data += 1;
  }

}
