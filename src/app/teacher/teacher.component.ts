import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private _serviceobj: CommonService) { }

  ngOnInit(): void {
  }

  greetStudent() {
    this._serviceobj.sendMessage('Good morning');
  }

  appStudent() {
    this._serviceobj.sendMessage('Well done');

  }

}
