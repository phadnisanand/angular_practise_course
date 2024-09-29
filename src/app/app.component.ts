import { Component,ElementRef,ViewChild,AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('myTestDiv') myTestDiv! : ElementRef;
  data: any[] = [];
  private _userName: string = 'anand';
  title = 'hello anand';
  subscription: Subscription;
  constructor(private dataSharingService: DataService) {
     // subscribe to home component data
     /*this.subscription = this.dataSharingService.getData().subscribe(res => {
      if (res) {
          this.data.push(res);
      } else {
          // clear data when empty data received
          this.data = [];
      }
  });*/

  }
  get userName() {
   // console.log('AppComponent.getter', this._userName);
    return this._userName;
  }

  set userName(value: string) {
    //console.log('AppComponent.setter', value);
    this._userName = value;
  }

  ngAfterViewInit(): void {
    // this.myTestDiv.nativeElement.classList.toggle("my-class");
   }
   ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      //this.subscription.unsubscribe();
    }
}
