import { Component, OnInit } from '@angular/core';
import { NbaService } from '../nba.service';
@Component({
  selector: 'app-httpinterdemo',
  templateUrl: './httpinterdemo.component.html',
  styleUrls: ['./httpinterdemo.component.css']
})
export class HttpinterdemoComponent implements OnInit {

  constructor(private nbaApi : NbaService) { }
  players: any[] = [];


  ngOnInit(): void {

    this.players = [];
    this.nbaApi.getPlayers().subscribe((data) => {
      this.players = data;
    });
  }

}
