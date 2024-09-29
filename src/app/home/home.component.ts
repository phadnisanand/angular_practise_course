import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataSharingService: DataService) { }

  ngOnInit(): void {
  }
  sendData(): void {
    this.dataSharingService.sendData('Send Data from Home Component to App Component!');
  }
  clearData(): void {
    this.dataSharingService.clearData();
  }

}
