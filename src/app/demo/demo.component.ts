import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit,AfterViewInit {
  /*fname: string;
  username: string;
  private _name:string;
  family: string;
  firstname:string ='Anand';
  lastname:string= 'phadnis';
  demo:string ='custom';
  @ViewChild('familyref') familyref: ElementRef;
  constructor() { }
  get Name(): string{
    return this._name;
  }
  set Name(value:string){
    this._name = value;
    if(value =='anand'){
      alert('hello');
    }
  }*/
  ngOnInit(): void {
    //this.demo = 'new ';
  }
  /*greet(updatedvalue) {
    this.username = updatedvalue;
  }*/
  ngAfterViewInit(): void {
   // this.familyref.nativeElement.className = 'anand';
    //this.familyref.nativeElement.focus();
  }
  democount(){
    alert('hi clicked');
  }
  showName() {

  }
}
