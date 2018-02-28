import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, ApiService } from '../../_services/index';
import { Http } from '@angular/http';
import { countries_list } from 'app/interfaces';
import { CountryService } from 'app/_services/api.service';


@Component({
      moduleId: module.id,
      selector: 'app-disc-create',
      templateUrl: './create.component.html',
      styleUrls: ['./create.component.css'],
      host: {
            '(document:click)': 'handleClick($event)',
      },
})


export class DiscCreateComponent implements OnInit {
      public query = '';
      public user = ["Sathish Kumar", "AnandRaj Venkatesan", "Arunkumar", "Jaiganesh", "Logan", "John", "Prabha", "Shameem", "Syed"];
      /* public users_list = [{ "id": 2, "name": "Sathish" }, { "id": 6, "name": "AnandRaj" }, { "id": 7, "name": "Arunkumar" }, { "id": 9, "name": "Jaiganesh" }, { "id": 1, "name": "Logan" }, { "id": 3, "name": "Prabha" }]; */
      public users_list = [];
      public selected = [];
      public selectedId = [];
      public filteredList = [];
      public elementRef;
      list: string[] = [];
      constructor(myElement: ElementRef,
            private ApiService: ApiService) {
            this.elementRef = myElement;
      }

      ngOnInit(): void {
            this.ApiService.getusers()
                  .subscribe(
                  data => {
                        console.log(data);
                        if (data.status == "201") {
                              console.log("false");

                        } else {
                              this.users_list = data;
                              for (let i = 0; i < this.users_list.length; i++) {
                                    console.log(this.users_list[i]['fname']);
                                    this.list.push(this.users_list[i]['fname']);
                              }
                        }
                  },
                  error => {

                  });


      }

      filter() {
            if (this.query !== "") {
                  /* this.filteredList = this.countries.filter(function (el) {
                        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                  }.bind(this)); */
                  this.filteredList = this.list.filter(function (el) {
                        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                  }.bind(this));

            } else {
                  this.filteredList = [];
            }
      }

      select(item) {
            for (let i = 0; i < this.users_list.length; i++) {
                  if (this.users_list[i].fname === item) {
                        if(!this.selected.includes(this.users_list[i])){
                              this.selected.push(this.users_list[i]);
                              this.selectedId.push(this.users_list[i].uid);
                        }
                       
                  }
            }
            this.query = '';
            console.log(this.selectedId);
            this.filteredList = [];
      }
      remove(item) {
            this.selected.splice(this.selected.indexOf(item), 1);
      }

      handleClick(event) {
            var clickedComponent = event.target;
            var inside = false;
            do {
                  if (clickedComponent === this.elementRef.nativeElement) {
                        inside = true;
                  }
                  clickedComponent = clickedComponent.parentNode;
            } while (clickedComponent);
            if (!inside) {
                  this.filteredList = [];
            }
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
