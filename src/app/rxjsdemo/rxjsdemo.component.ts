import { Component, OnInit } from '@angular/core';
import { filter, map, of ,BehaviorSubject,fromEvent } from 'rxjs';

@Component({
  selector: 'app-rxjsdemo',
  templateUrl: './rxjsdemo.component.html',
  styleUrls: ['./rxjsdemo.component.css']
})
export class RxjsdemoComponent implements OnInit {

  constructor() { }
  users = [
    { id: 1, name: 'John', isActive: true},
    { id: 2, name: 'Anand', isActive: true},
    { id: 3, name: 'Priya', isActive: false}
  ];


   behaviorSubject$ = new BehaviorSubject('Initial value');


  user$ = of(this.users);
  username$ = this.user$.pipe(map((users) => users.map(user => user.name)));
  filterdUsers$ = this.user$.pipe(map((users) => users.filter(user => user.isActive == true)));



  ngOnInit(): void {
    this.filterdUsers$.subscribe((users) => {
        console.log(users);
    });



  }

}
