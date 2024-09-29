import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  data: any[] = [];
  subscription: Subscription;

  constructor(private dataSharingService: DataService) {
        this.subscription = this.dataSharingService.getData().subscribe(res => {
          if (res) {
              this.data.push(res);
          } else {
              // clear data when empty data received
              this.data = [];
          }
      });
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }

}
