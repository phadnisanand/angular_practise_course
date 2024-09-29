import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-anotherhome',
  templateUrl: './anotherhome.component.html',
  styleUrls: ['./anotherhome.component.css']
})
export class AnotherhomeComponent implements OnInit {

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
