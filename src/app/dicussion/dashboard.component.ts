import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { AlertService, AuthenticationService } from '../_services/index';
import { Board } from '../interfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  boardList: Array<Board>;

  constructor(  private authenticationService: AuthenticationService ) { }
 
  ngOnInit() {
    this.boardList = this.authenticationService.getThreads();
    console.log(this.boardList);
  }

}
