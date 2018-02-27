import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, ApiService } from '../../_services/index';
import { Http } from '@angular/http';
import { countries_list } from 'app/interfaces';
import { CountryService } from 'app/_services/api.service';


@Component({
      moduleId: module.id,
      selector: 'app-disc-create',
      templateUrl: './create.component.html',
      styleUrls: ['./create.component.css']
})


export class DiscCreateComponent implements OnInit {
      ngOnInit(): void {
          
      }

      /* DefaultValue = null;

      createTask: object = {
            convergeID: ''
      };

      JobType: string[] = ['New Build', 'Refresh', 'Issues'];
      Complexity: string[] = ['Simple', 'Medium', 'Complex'];
      Publishers: string[] = ['WM', 'CVS', 'DG'];
      POCS: string[] = ['Bill', 'Khary', 'Noble'];
      Status: string[] = ['InProgress', 'YetToStart'];

      schStart: any;
      schEnd: any;
      actStart: any;
      actEnd: any;

      testData = {
            "token": "$1$2zVydAgV$7GHtV1pofpYGRWxC1qCUq.",
            "uid": "2",
            "converge_id": "00001_000_PNG",
            "jobtype": "New",
            "complexity": "3",
            "scheduled_start_date": "2018-02-07",
            "scheduled_end_date": "2018-02-11",
            "publisher": "WM",
            "pocs": "BILL",
            "scheduled_hours": "24"
      }

      constructor(
            private ApiService: ApiService,
            private router: Router, ) { }

      ngOnInit() {

      }

      createNewTask() {
            //console.log(this.actStart)
      }

      onSubmit(data) {
            console.log(data)
            this.ApiService.dicsCreate().subscribe(
                  (data) => {
                        console.log(data);
                        this.resetForm();
                        this.router.navigate(['dashboard']);
                  }
            );

      }

      resetForm() {
            this.createTask = {
                  convergeID: ''
            };
      } */

      
}
