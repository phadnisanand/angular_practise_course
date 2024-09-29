import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  msg:string= '';
  constructor(private _intService: CommonService) { }

  ngOnInit(): void {
    this._intService.teacherMessage$.subscribe(message => {
      if(message == 'Good morning'){
        this.msg = 'Good morning teacher';
      } else if(message == 'Well done') {
        this.msg = 'Thank You teacher';
      }
    });
  }
}
