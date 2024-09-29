import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  subscription: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   // this.subscription = this.dataService.logoutUser.subscribe(message => this.message = message)
  }

  onLogout(){
//    this.dataService.logoutUser();
  }

}
