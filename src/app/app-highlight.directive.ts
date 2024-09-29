import { Directive,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = "initial";

  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    alert('Host element clicked!');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = 'initial';
  }

}
