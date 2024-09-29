import { Component, OnInit,AfterContentInit,ContentChild,ElementRef, ContentChildren,QueryList } from '@angular/core';
import { ContproparentComponent } from '../contproparent/contproparent.component';
@Component({
  selector: 'app-contprochild',
  templateUrl: './contprochild.component.html',
  styleUrls: ['./contprochild.component.css']
})
export class ContprochildComponent implements AfterContentInit {
  //@ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  @ContentChildren('contentParagraph') elem: QueryList<any>;


  constructor() { }


  ngAfterContentInit(): void {
  // console.log(this.paragraph.nativeElement.innerText);
 console.log(this.elem.length);
  }

}
